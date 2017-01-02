/**
 * Created by niral on 02/01/17.
 */

const mongoose = require('mongoose');
var AutoIncrement = require('mongoose-sequence');


const BillSchema = new mongoose.Schema({
    billNumber: {
        type: Number,
        required: true,
        default: 0
    },
    restaurantId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    billDate: {
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
        default: 1,
        required: true
    },
    discount: {
        type: Number,
        default: 0
    },
    total: {
        type: Number,
        default: 0
    },
    feedback: {
        rating: Number,
        review: String
    }
});

BillSchema.plugin(AutoIncrement, {id: 'order_sq', inc_field: 'billNumber', reference_fields: ['restaurantId'] });

let Bill = mongoose.model('Bill', BillSchema);
module.exports = {Bill}

