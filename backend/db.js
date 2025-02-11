const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/React-learning";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI, {
            serverSelectionTimeoutMS: 5000,
            family: 4 // Force IPv4
        });
        console.log("Connected to MongoDB Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        // Retry logic or graceful shutdown
        setTimeout(connectToMongo, 5000);
    }
}

module.exports = connectToMongo;