require("dotenv").config();
const mongoose = require("mongoose");

// URI
const { MONGODB_URI } = process.env;
console.log('MongoDB URI:', MONGODB_URI);

const connectToDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

connectToDB();
