var router = require('express').Router()
var API = require('./helpers/HR_API.jsx');


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

// GETs a specific product's styles
// Request parameters: product_id
router.get('/styles', (request, response) => {
  // If there is no product_id as the parameter, return bad response
  if (!request.query.product_id) {
    response.send(500);
  } else {
    API.getProductStyles(request.query.product_id)
      .then((results) => {
        response.status(200).send(results.data);
      })
      .catch((error) => {
        console.log('Error in getting all the products', error);
        response.send(500);
      });
  }
});

router.get('*/related', (request, response) => {
  if (!request.query.product_id) {
    response.send(500);
  } else {
    API.getRelatedProducts(request.query.product_id)
      .then((results) => {
        response.status(200).send(results.data)
      })
      .catch((error) => {
        console.log('Error in getting related products', error);
        response.send(500);
      })
  }

});

router.get('/qa/questions', (request, response) => {
  if (!request.query.product_id) {
    response.send(500);
  } else {
    API.getProductQuestion(request.query.product_id)
    .then((results) => {
      response.status(200).send(results.data)
    })
    .catch((error) => {
      console.log('Error in getting product question', error);
      response.send(500);
    })
  }
})

module.exports = router;