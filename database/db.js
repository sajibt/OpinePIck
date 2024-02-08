const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI, {});
        console.log(`Connected to MongoDB at: ${connect.connection.host}`);
    } catch (err) {
        console.log("Error connecting to MongoDB", err);
        process.exit(1); //exiting due to an error
    }
};

module.exports = connectDB;
