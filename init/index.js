const mongoose = require("mongoose");
const initaData = require("./data.js");
const Listing = require("../models/listing.js");

// connected to URL DB
const MONGO_URL = "mongodb://127.0.0.1:27017/Wanderlust";

// For creating connection

main().then(() => {
    console.log("connected to DB");
}).catch(err => {
    console.log(err);
});

// async function without any delay for connected the server 

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initData = require("./data.js"); // make sure this line exists

const initDB = async () => {
    await Listing.deleteMany({});

    const newData = initData.data.map((obj) => ({
        ...obj,
        owner: new mongoose.Types.ObjectId("69bf96df3929cd074126b4bf")
    }));

    await Listing.insertMany(newData);
    console.log("data was initialized");
};

initDB();