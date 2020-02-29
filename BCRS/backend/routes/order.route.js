const express = require('express');
const app = express();
const orderRoute = express.Router();

// Order model
let Order = require('../models/Order');

// Add Order
orderRoute.route('/create').post((req, res, next) => {
  Order.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Orders
orderRoute.route('/').get((req, res) => {
  Order.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single order
orderRoute.route('/read/:id').get((req, res) => {
  Order.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update order
orderRoute.route('/update/:id').put((req, res, next) => {
  Order.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error)
    } else {
      res.json(data)
      console.log('Data updated successfully')
    }
  })
})

//get last order
orderRoute.route('/getLastOrder').get((req, res) => {
  Order.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  }).sort({_id:-1}).limit(1)
})

// Delete order
orderRoute.route('/delete/:id').delete((req, res, next) => {
  Order.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = orderRoute;
