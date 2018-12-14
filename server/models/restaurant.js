console.log("inside of restaurant.js");

const mongoose = require("mongoose");
const ReviewSchema = require("./review.js");

const RestaurantSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Restaurant's name is required"],
        minlength: [3, "Name is too short."],
        maxlength: 255
    },

    cuisine: {
        type: String,
        required: [true, "Type of cuisine is required."],
        minlength: [3, "Cuisine is too short."],
        maxlength: 255
    },

    reviews: [ReviewSchema]

}, {timestamps: true});

mongoose.model('Restaurant', RestaurantSchema);
