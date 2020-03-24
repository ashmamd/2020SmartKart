# Install instructions

- In your terminal, run the command `git clone https://github.com/illinoistech-itm/2020-team14w.git`
- Go to the 2020-team14w folder by using the `cd` command
 - cd to the 2020-team14w directory
  - cd to code folder
- inside the code folder, run the following commands:
- `npm init -y`
- `npm i express mysql`
- `npm i -D bcrypt@3.0.0`
- `npm install --save-dev nodemon dotenv` 

- open your package.json file and inside the script tag,
- erase the whole "test" statement and input the following:
- `"start": "nodemon app"`

- In your terminal, run the command `npm start`
- Go to your web broswer and type in http://localhost:3000/
