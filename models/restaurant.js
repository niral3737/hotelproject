/**
 * Created by niral on 02/01/17.
 */
const mongoose = require('mongoose');
const validator = require('validator');


const RestaurantSchema = new mongoose.schema({
    name: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    username: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        trim: true
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }],
    address: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    ownerName: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    contactNumber: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10,
        trim: true
    },
    subscription: {
        datePurchased: {
            type: String,
            required: true
        },
        subscriptionType : {
            type: String,
            enum: ['free-trial', '3-months', '6-months', '12-months'],
            required: true
        },
        amountPerMonth: {
            type: Number,
            required: true
        },
        previousPayments: [mongoose.Schema.Types.ObjectId],
        isPaymentDue: Boolean,
        isActive: Boolean
    },
    numberOfTables: Number,
    items: [mongoose.Schema.Types.ObjectId],
    currentOrders: [mongoose.Schema.Types.ObjectId]
});

let Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = {Restaurant};