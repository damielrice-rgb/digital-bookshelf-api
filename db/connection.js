const mongoose = require('mongoose');

async function connectDB () {
  try {

const uri = process.env.MONGO_URI;

await mongoose.connect(uri);

console.log('Success!')

  } catch (error) {
    console.error('Error: ', error);
    process.exit(1);
  }
}

module.exports = connectDB;

