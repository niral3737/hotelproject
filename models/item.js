/**
 * Created by niral on 02/01/17.
 */

const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    category: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    timesOrdered: {
        type: Number,
        default: 0
    }
});



let Item = mongoose.model('Item', ItemSchema);

module.exports = {Item};