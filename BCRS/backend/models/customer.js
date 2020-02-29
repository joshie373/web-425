const mongo = require('mongoose');
const Schema = mongo.Schema;

// Define collection and schema
let Customer = new Schema({
  firstName : {type: String},
  lastName: {type: String},
  address1: {type: String},
  address2: {type:String},
  city: {type: String},
  state: {type:String},
  zip: {type: String},
  phone: {type:String},
  email: {type:String}

}, {
   collection: 'customers'
})

module.exports = mongo.model('Customer', Customer)

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // Define collection and schema
// let Customer = new Schema({
//    name: {
//       type: String
//    },
//    price: {
//       type: Number
//    }
// }, {
//    collection: 'customers'
// })

// module.exports = mongoose.model('Customer', Customer)
