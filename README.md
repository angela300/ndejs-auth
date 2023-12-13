# A simple Node Auth backend
# This will include:
#   - User Login and Signup
#   - Request Authorization (JWT)
#   - One-Time Pin System (OTP)
#   - Email Verification (OTP)
#   - Password Reset (OTP)

# App and Database Set up:
mkdir nodejs-auth
cd nodejs-auth

# Initialize nodeJS project
npm init -y

# Install Express and other packages that we will need:
npm install express dotenv mongoose jsonwebtoken bcrypt nodemailer cors nodemon

# Initialize our project into our new git repository
git init

# Open directory in VS Code and inside this directory, create a new directory 'src' that will contain our code files.

# Create a .env file in the root directory; this file will contain all our secret keys and values.
# Also, add a .gitignore file to specify that all files ending in .env should not be tracked, as well as the 'node_modules' folder.
*.env
node_modules

# Database setup - We use the cloud-based MongoDB.
# Login to the dashboard on Cloud.mongodb.com
# Create a new project and database on the free tier
# Allow your database to be accessible to all IP addresses.
# Create a new connection, choose driver NodeJS, copy the connection string that comes up and paste it into your .env file
MONGO_DB_URI = mongodb+srv://angela456:<password>@cluster0.19fkfhm.mongodb.net/?retryWrites=true&w=majority

# Replace the password area, <password>, with the actual password for your database user.
# Make sure to also install MongoDB with ‘npm install MongoDB’.

# In the src directory, create another directory, ‘config’, for configurations.
# In this new directory, create a new file, ‘db.js’, for database configurations.

# db.js
require("dotenv").config();
const mongoose = require("mongoose");

// URI
const { MONGODB_URI } = process.env;

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

connectToDB();

# Server setup
# Next, we create an app.js file for creating the server.

# app.js
// MongoDb
require("./config/db");

const express = require("express");

// BodyParser will enable us to supply JSON values to our server requests
const bodyParser = express.json;

// Cors will enable us to make requests to the API from external applications
const cors = require("cors");

// Create server app
const app = express();

// App and cors passed as middleware
app.use(cors());
app.use(bodyParser());

module.exports = app;

# Export the app to the index.js file
# Define a PORT in the dotenv file.

# index.js
const app = require("./app");
const { PORT } = process.env;

const startApp = () => {
    app.listen(PORT, () => {
        console.log(`Auth Backend is running on port ${PORT}`);
    });
};

startApp();

# In the package.json, add a script to run the app:
# The script will use the nodemon package, which enables the app to continuously run and refresh in the background.
# The script also contains the locations of our index.js file and will appear like this:

# package.json
"scripts": {
  "start": "nodemon src/index.js"
}
