const mongo = require('mongoose');
const Schema = mongo.Schema;

// Define collection and schema
let Order = new Schema({
  customerId : {type: String},
  services: {type:Array},
  servicesTotal: {type: Number},
  partsTotal: {type:Number},
  laborTotal: {type: Number},
  laborHours:{type:Number},
  grandTotal: {type:Number},
  status:{type:String}

}, {
   collection: 'orders'
})

module.exports = mongo.model('Order', Order)

// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// // Define collection and schema
// let Order = new Schema({
//    name: {
//       type: String
//    },
//    price: {
//       type: Number
//    }
// }, {
//    collection: 'orders'
// })

// module.exports = mongoose.model('Order', Order)
