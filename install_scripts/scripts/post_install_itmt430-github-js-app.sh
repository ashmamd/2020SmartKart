#!/bin/bash 
set -e
set -v


# http://superuser.com/questions/196848/how-do-i-create-an-administrator-user-on-ubuntu
# http://unix.stackexchange.com/questions/1416/redirecting-stdout-to-a-file-you-dont-have-write-permission-on
# This line assumes the user you created in the preseed directory is vagrant
echo "%admin  ALL=NOPASSWD: ALL" | sudo tee -a /etc/sudoers.d/init-users
sudo groupadd admin
sudo usermod -a -G admin vagrant


# Installing vagrant keys
wget --no-check-certificate 'https://raw.github.com/mitchellh/vagrant/master/keys/vagrant.pub'
#sudo mkdir -p /home/vagrant/.ssh
sudo chown -R vagrant:vagrant /home/vagrant/.ssh
cat ./vagrant.pub >> /home/vagrant/.ssh/authorized_keys
sudo chown -R vagrant:vagrant /home/vagrant/.ssh/authorized_keys
echo "All Done!"

#http://www.fail2ban.org/wiki/index.php/MANUAL_0_8#Jails
sudo apt-get update
sudo apt-get install -y fail2ban
sudo sed -i "s/bantime = 600/bantime = -1/g" /etc/fail2ban/jail.conf
sudo systemctl enable fail2ban
sudo service fail2ban restart

################################################################################################################
# Keep the above lines to make sure that Vagrant will work seamlessly                                          #
################################################################################################################
# set the /etc/hosts file to match hostname
echo "$WEBSERVERIP     ws  ws.sat.iit.edu" | sudo tee -a /etc/hosts
sudo hostnamectl set-hostname ws

# enable and allow ports in firewall
# https://serverfault.com/questions/790143/ufw-enable-requires-y-prompt-how-to-automate-with-bash-script
ufw --force enable
ufw allow proto tcp to 0.0.0.0/0 port 22
ufw allow proto tcp to 0.0.0.0/0 port 80
ufw allow proto tcp to 0.0.0.0/0 port 443
ufw allow proto tcp to 0.0.0.0/0 port 3000

# Install nodejs and npm
# https://github.com/nodesource/distributions/blob/master/README.md#debinstall
# 12.x verson is LTS
sudo apt-get update
sudo apt-get install -y vim git nginx

# Nginx configurations
# https://nginx.org/en/docs/beginners_guide.html
# https://dev.to/guimg/how-to-serve-nodejs-applications-with-nginx-on-a-raspberry-jld
sudo cp ./nginx/default /etc/nginx/sites-enabled
sudo systemctl daemon-reload
sudo systemctl reload nginx

# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

sudo systemctl enable nginx
sudo systemctl start nginx
sudo npm install pm2@latest -g
# sudo pm2 startup systemd
# This line is the output of the above command
# https://pm2.keymetrics.io/docs/usage/startup/
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u vagrant --hp /home/vagrant

###############################################################################
# Replace any occurance of hajek with the name of your own private repository #
###############################################################################

mkdir /home/vagrant/project
sudo chown -R vagrant:vagrant ~/2020-team14w

# Change ownership of PM2 service that auto-starts our NojeJS app
sudo chown -R vagrant:vagrant /home/vagrant/.pm2
cp ./2020-team14w/code/app.js /home/vagrant/project
# Change the ownership of the NodeJS application files
sudo chown -R vagrant:vagrant /home/vagrant/project
pm2 start /home/vagrant/project/app.js
pm2 save
sudo chown -R vagrant:vagrant /home/vagrant/.pm2

# You could add a line to remove the private key and the extranious code from the GitHub repo here

# https://nodejs.org/en/docs/guides/getting-started-guide/