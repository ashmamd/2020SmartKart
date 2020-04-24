# Cloning Application Source Code

1. Open up your terminal, type in "ssh-keygen", hit enter to save it into the default directory or give a specific directory path you want to save the key in, hit enter again (we don't need a passphrase). You will see your key has been generated.
2. type "ls ~/.ssh" or the path of the directory you saved your key in (ls .../.../.ssh). You will see the keys you have just generated (id_rsa, id_rsa.pub).  
3. Type in "cat ~/.ssh/id_rsa.pub" or directory path to open up your public key. Copy the public key that is listed on the terminal. Open your repository on GitHub. Go to the settings of your repo. Click on Deploy Keys, than click on Add Deploy Key, and give it a title of your choice. Paste the copied public key into the text box below 'Key'. Click Add key and confirm your password. 
4. Create a file called 'config' in the ssh directory. Inside the config file add the following:
Host github.com
Hostname github.com
IdentityFile /home/vagrant/.ssh/id_rsa (your path will be different here)
StrictHostKeyChecking no
5. Save the file and go back to your terminal and type "git clone git@github.com:illinoistech-itm/2020-team14w.git"
6. If you get an error for access right do the following in your terminal
    * type "ls -la ~/.ssh/config"
    * type "chmod 600 ~/.ssh/config"
    * type "git clone git@github.com:illinoistech-itm/2020-team14w.git"
7. This repository now should be cloned successfully.

# Vagrant/Packer Install instructions (Automation)

1. cd into the "install_scripts" folder and run the code ./delete.sh
2. run this on terminal packer build --var-file=./variables.json ubuntu18044-itmt430-database.json
3. run this on terminal packer build --var-file=./variables.json ubuntu18044-itmt430-webserver.json
4. Mac users enter "chmod +x startingvagrant.sh" or "chmod +x delete.sh" to get permission if asked.
5. Inside the "install_scripts" folder, run the code ./startingvagrant.sh
5. Open the "vagrant" file in "db2020team14" folder and change the ip address to "11" instead of "10". Also, uncomment line 35 in "vagrant" file in "db2020team14" & "ws2020team14" folders.
6. Navigate to 192.168.33.10:3000 on your local host

# Vagrant/Packer Install instructions (Manually)

1. Install Packer and Vagrant (tooling assignment)
2. cd into the "install_scripts" folder
3. Issue the command:
    * cp variables-sample.json variables.json
    * Open the variables.json file and change the usernames and passwords 
4. Create a file called `id_rsa_github_deploy_key` inside the install_scripts folder and paste your private RSA key there

5. Execute the following command: 
* `packer build --var-file=./variables.json ubuntu18044-itmt430-database.json`

6. Issue the commands for db packer build:
    * `cd ../build`
    * `vagrant box add ./YOUR-ubuntu-box-name.box --name db2020team14`
    * `vagrant box list` (You should see your Vagrant box in the list)
    * `mkdir db2020team14`
    * `cd db2020team14`
    * `vagrant init db2020team14`
    * open the vagrantfile inside db2020team14
    * uncomment line 35 / config.vm.network "private_network", ip: "192.168.33.10"
    * `vagrant up`
    * `vagrant ssh`
    
7. Execute the following commands: 
* `packer build --var-file=./variables.json ubuntu18044-itmt430-webserver.json`

8. Issue the commands for ws packer build:
    * `cd ../build`
    * `vagrant box add ./YOUR-ubuntu-box-name.box --name ws2020team14`
    * `vagrant box list` (You should see your Vagrant box in the list)
    * `mkdir ws2020team14`
    * `cd ws2020team14`
    * `vagrant init ws2020team14`
    * open the vagrantfile inside ws2020team14
    * uncomment line 35 / config.vm.network "private_network", ip: "192.168.33.100"
    * `vagrant up`
    * `vagrant ssh`
    
8. Navigate to 192.168.33.100 on your local host

## List of external packages installed via package manager
1. Node.js
2. Nginx
3. MariaSQL

# Web server configuration
For webserver
1. vagrant ssh (if not open up webserver in virtual box, credentials: vagrant vagrant)
2. cd /etc/nginx/sites-available
3. sudo nano default
4. comment all lines with (#) except for the server{} block
5. make the server block look exactly like this
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /home/vagrant/2020-team14w/code/public;
	index index.html;
	server_name 192.168.33.10;
}
6. ctrl+o (save)
   ctrl+x (exit) then click enter
7. test configuration (for misspellings) with
sudo nginx -t
8. sudo systemctl restart nginx
9. on your laptop, navigate to: 192.168.33.10

## Local Host Install instructions

1. [Download node.js](https://nodejs.org/en/) 
2. In your terminal, run the command `git clone https://github.com/illinoistech-itm/2020-team14w.git`
3.  Go to the 2020-team14w folder by using the `cd` command
* cd to the 2020-team14w directory
* cd to code folder
4. inside the code folder, run the following commands:
* `npm init -y`
* `npm i express mysql`
* `npm install --save-dev nodemon` 

5. Open your package.json file and inside the script tag, if you see the following, go to Step 6.
* `"start": "nodemon app"`
* If you see the `"test: "` statement, erase the whole "test" statement and input the following:
* `"start": "nodemon app"`

6. In your terminal, run the command `npm start`
7. Go to your web browser and type in http://localhost:3000/

## Database setup

1. Name of the database for this app is *smartkart*
2. Inside code/public/js/db.js, make sure to change the user and password field accordingly
3. Make sure to give your user access rights to use the *smartkart* database

