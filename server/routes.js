var router = require('express').Router()
var API = require('./helpers/HR_API.jsx');

// import yo controllers

// GETs either a specific product or all the products
// Request parameters: [OPTIONAL product_id]
router.get('/products', (request, response) => {
  // Asynchronous function to return the promise of getting either a specific product or all the products (so we can do promise chaining)
  async function getAllOrOneProduct (id) {
    if (id) { // If an id is present in the query string, return the promise to retrieve a specific product
      return API.getProduct(id);
    } else { // Else return the promise to retrieve ALL products
      return API.getAllProducts();
    }
  }
  getAllOrOneProduct(request.query.product_id)
    .then((results) => {
      response.status(200).send(results.data);
    })
    .catch((error) => {
      console.log('Error in getting all the products', error);
      response.send(500);
    });
});





module.exports = router;