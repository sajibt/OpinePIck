const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`Connected to mongoDB at: ${connect.connect.host}`);
  } catch (error) {
    console.log("Probelem with conecting with server");
    process.exit(1); //exit process iwth non zero
  }
};

module.exports = connectDB;
