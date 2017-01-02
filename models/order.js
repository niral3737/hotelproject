/**
 * Created by niral on 02/01/17.
 */

const mongoose = require('mongoose');


const OrderSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    table: {
        type: Number,
        required: true,
        default: 1
    },
    orderedItems: [
        {
            item: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Item'
            },
            quantity: {
                type: Number,
                default: 1
            },
            notes: {
                type: String
            }
        }
    ],
    feedback: {
        rating: Number,
        review: String
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
});

let Order = mongoose.model('Order', OrderSchema);
module.exports = {Order};