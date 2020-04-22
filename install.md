# Vagrant/Packer Install instructions

1. Remove the current db2020team14 and ws2020team14 folders from install_scripts folder as instructed below. 
    * cd into the "install_scripts"
    * use the code "vagrant box remove db2020team14 or vagrant destroy default" when asked type "y" then enter
    * use the code "vagrant box remove ws2020team14 or vagrant destroy default" when asked type "y" then enter
    * use the code "rm ../build/*box"
2. packer build --var-file=./variables.json ubuntu18044-itmt430-database.json
3. packer build --var-file=./variables.json ubuntu18044-itmt430-webserver.json
4. ./startingvagrant.sh
5. Mac users enter "chmod +x startingvagrant.sh"

# Vagrant/Packer Install instructions 

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

