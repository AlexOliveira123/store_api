const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    slug: {
        type: String,
        required: [true, 'O slug é obritatório'],
        trim: true,
        index: true,
        unique: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    active: {
        type: Boolean,
        require: true,
        default: false
    },
    tags: [{
        type: String,
        required: true
    }]
});


module.exports = mongoose.model('Product', schema)