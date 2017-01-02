/**
 * Created by niral on 02/01/17.
 */

const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
    restaurantId: [mongoose.Schema.Types.ObjectId],
    amount: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now
    },
    subscriptionType: {
        type: String,
        enum: ['3-months', '6-months', '12-months'],
        required: true
    },
    transactionNumber: {
        type: Number,
        required: true
    }
});

