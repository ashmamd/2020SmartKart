# Vagrant/Packer Install instructions 

1. Install Packer and Vagrant (tooling assignment)
2. Change Line 65 of ubuntu18044-itmt430-database.json to your rsa key location
* example:    "source": "./id_rsa_github_deploy_key",

3. Change Line 65 of ubuntu18044-itmt430-webserver.json to your rsa key location
* example:    "source": "./id_rsa_github_deploy_key",

4. cd into the "install_scripts" folder
5. Issue the command:
    * cp variables-sample.json variables.json
    * Open the variables.json file and change the usernames and passwords 
-- line 53 on post_install_itmt430-github-js-app.sh should be
    * sudo cp ./2020-team14w/install_scripts/nginx/default /etc/nginx/sites-enabled

6. Execute the following commands seperately: 
* `packer build --var-file=./variables.json ubuntu18044-itmt430-database.json`
* `packer build --var-file=./variables.json ubuntu18044-itmt430-webserver.json`

7. Issue the commands:
    * `cd ../build`
    * `vagrant box add ./YOUR-ubuntu-box-name.box --name 2020team14w`
    * `vagrant box list` (You should see your Vagrant box in the list)
    * `mkdir 2020team14w`
    * `cd 2020team14w`
    * `vagrant init new2020team14w`
    * open the vagrantfile inside new2020team14w
    * uncomment line 35 / config.vm.network "private_network", ip: "192.168.33.10"
    * `vagrant up`
    * `vagrant ssh`

8. Navigate to 192.168.33.10 on your local host


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
