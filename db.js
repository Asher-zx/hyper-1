//filepath: /Users/wangzhixuan/Desktop/test/Fabian-api/hyper-1/db.js

import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/hyper-api', {
      userNewUrlParser: true,
      useUnifiedTopoloogy: true,
    });
    console.log('Connected to MongoDB');
  } catch (error)  {
    console.log(error.message);
    process.exit(1);
  }
}

export default connectDB;