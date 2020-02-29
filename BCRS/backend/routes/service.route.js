const express = require('express');
const app = express();
const serviceRoute = express.Router();

// Service model
let Service = require('../models/Service');

// Add Service
serviceRoute.route('/create').post((req, res, next) => {
  Service.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});

// Get All Services
serviceRoute.route('/').get((req, res) => {
  Service.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get single service
serviceRoute.route('/read/:id').get((req, res) => {
  Service.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


// Update service
serviceRoute.route('/update/:id').put((req, res, next) => {
  Service.findByIdAndUpdate(req.params.id, {
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

// Delete service
serviceRoute.route('/delete/:id').delete((req, res, next) => {
  Service.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = serviceRoute;
