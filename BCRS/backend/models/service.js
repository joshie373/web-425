const mongo = require('mongoose');
const Schema = mongo.Schema;

// Define collection and schema
let Service = new Schema({
   name: {
      type: String
   },
   price: {
      type: Number
   }

}, {
   collection: 'services'
})

module.exports = mongo.model('Service', Service)
