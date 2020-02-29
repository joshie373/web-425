let express = require('express'),
   path = require('path'),
   mongo = require('mongoose'),
   cors = require('cors'),
   bodyParser = require('body-parser'),
   dbConfig = require('./database/db');

// Connecting with mongo db
mongo.Promise = global.Promise;
mongo.connect(dbConfig.db, {
   useNewUrlParser: true,
   useUnifiedTopology: true
}).then(() => {
      console.log('Database successfully connected')
   },
   error => {
      console.log('Database could not connected: ' + error)
   }
)

// Setting up port with express js
const serviceRoute = require('../backend/routes/service.route');
const orderRoute = require('../backend/routes/order.route')
const customerRoute = require('../backend/routes/customer.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
   extended: false
}));
app.use(cors());
app.use(express.static(path.join(__dirname, 'dist/hughes-BCRS')));
app.use('/', express.static(path.join(__dirname, 'dist/hughes-BCRS')));
app.use('/api/services', serviceRoute);
app.use('/api/orders', orderRoute);
app.use('/api/customers', customerRoute);

// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

// Find 404 and hand over to error handler
app.use((req, res, next) => {
   next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message); // Log error message in our server's console
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});
