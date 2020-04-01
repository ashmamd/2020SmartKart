# Install instructions

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
7. Go to your web broswer and type in http://localhost:3000/

## Database setup

1. Name of the database for this app is *smartkart*
2. Inside code/public/js/db.js, make sure to change the user and password field accordingly
3. Make sure to give your user access rights to use the *smartkart* database
