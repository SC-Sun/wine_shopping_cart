require("dotenv").config();
const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const insertSeedData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Seeding SUCCESS!");

    process.exit();
  } catch (error) {
    console.error("Data Seeing ERROR!");
    process.exit();
  }
};

insertSeedData();
