/**
 * Created by cdcalderon on 6/30/15.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categoryModel = new Schema({
    id: {
        type: Number
    },
    name: {
        type: String
    },
    description: {
        type: String
    },
    modifiedDate: {
        type: Date
    },
    state: {
        type: String
    },
    modifiedStateDate: {
        type: Date
    },
    image: {
        data: Buffer, contentType: String
    }
});

module.exports = mongoose.model('Category', categoryModel);

