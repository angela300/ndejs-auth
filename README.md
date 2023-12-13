**A simple Node Auth backend**

This will include:
-	User Login and Signup
-	Request Authorization (JWT)
-	One-Time Pin System (OTP)
-	Email Verification (OTP)
-	Password Reset (OTP)
  
**App and Database Set up:**
Create the project directory in Vscode
'mkdir nodejs-auth'

Initialize nodeJS project
'npm init -y'

Install Express and other packages that we will need:
'npm install express dotenv mongoose jsonwebtoken bcrypt nodemailer cors nodemon'

initialize our project into our new git repository: git init

In the project's root director, create a new directory src, that will contain the code files.
Create a .env file in the root directory, this file will contain all our secret keys and values.
Also add a .gitignore file to check that, here, we specify that all files ending in .env should not be tracked, as well as the nodemodules folder
Add this code to the.gitignore file:
*.env
node_modules

In the Database setup:
We use the cloud based Mongo DB.
Login to the dashboard on Cloud.mongodb.com
Create a new project and database on the free tier
Allow your database to be accessible to all IP addresses.
Create a new connection, choose driver NodeJS, copy the connection string that comes up and paste it into your .env file

connection string:
"MONGO_DB_URI = mongodb+srv://angela456:<password>@cluster0.19fkfhm.mongodb.net/?retryWrites=true&w=majority"

Replace the password area, <password> with actual password for your database user.
Make sure to also install MongoDB with ‘npm install mongodb’ command
In the src directory create another directory, ‘config’ for configurations.
In this new directory, create a new file, ‘db.js’ for database configurations.
In the db.js file, require the dotenv file and configure it:
Add this code to the.env file,
require ("dotenv").config();

The above code will enable us access the connection string in the ‘dotenv’ file
Add a ‘Mongoose’ package in the db.js file as it will help us interact with the database.
Add all this code to your db.js file:

``````````````````````````````````````
require ("dotenv").config();
const mongoose = require("mongoose")
//URI
const { MONGODB_URI } = process.env

const connectToDB = async () => {
    try{
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    } catch(error){
        console.log(error)
    }
};

connectToDB();
``````````````````````````````````````

Server setup.
Next, we create an app.js file for creating the server.
Add this code to app.js file:

``````````````````````````````````````
//MongoDb
require("./config/db")

const express = require("express")

//BodyParser will enable us supply json values to our server requests
const bodyParser = express.json;

//Cors will enable us make requests to the api from external applications
const cors = require ("cors")

//create server app
const app = express();

//app and cors passed as middleware
app.use(cors())
app.use(bodyParser());

module.exports = app;
``````````````````````````````````````

Export the app to the index.js file
Define a PORT in the dotenv file.

Your index.js file wil appear like this: 
``````````````````````````````````````
const app = require ("./app")
const { PORT } = process.env;

const startApp = () => {
    app.listen(PORT, ()=> {
        console.log(`Auth Backend is running on port ${PORT}`)
    });
};

startApp();
``````````````````````````````````````

In the package.json, add a script to run the app:
The script will use the nodemon package which enables the app to continuously run and refresh in the background.
The script also contains the locations of our index.js file and will appear like this:

``````````````````````````````````````
  "scripts": {
    "dev": "nodemon src/index.js"
  }
``````````````````````````````````````
Test the connection with: 'npm run dev' command in your projct root

