import { render, screen, act, waitFor, rerender } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../../client/src/App.js';
import RInCIndex from '../../client/src/Components/RelatedItemsAndComparison/RInCIndex.jsx';
import axios from 'axios';
import RelatedItemsList from '../../client/src/Components/RelatedItemsAndComparison/RelatedItemsList.jsx';
import OutfitList from '../../client/src/Components/RelatedItemsAndComparison/OutfitList.jsx';
import RelatedCards from '../../client/src/Components/RelatedItemsAndComparison/RelatedCards.jsx';
import OutfitCards from '../../client/src/Components/RelatedItemsAndComparison/OutfitCards.jsx';

// mock data
import mockProduct from './mockData/mockProductData.js';
import mockRelated from './mockData/mockRelatedData.js';
import mockStyles from './mockData/mockStyleData.js';
import mockMeta from './mockData/mockMetaData.js';

jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

// test('Renders related cards to current product', async () => {
//   axios.get.mockImplementation((url) => {
//     switch (url) {
//     // product info
//       case '/snuggie/products?product_id=40345':
//         return Promise.resolve({
//           data: mockProduct.brightFutureSunglasses
//         });
//       case '/snuggie/products?product_id=40346':
//         return Promise.resolve({
//           data: mockProduct.morningJoggers
//         });
//       case '/snuggie/products?product_id=40351':
//         return Promise.resolve({
//           data: mockProduct.yEasy350
//         });
//       case '/snuggie/products?product_id=40350':
//         return Promise.resolve({
//           data: mockProduct.bluesSuedeShoes
//         });
//       // related id
//       case '/snuggie/products?product_id=40344/related':
//         return Promise.resolve({
//           data: mockRelated.camoOnesieRelated
//         });
//       // styles
//       case '/snuggie/products/styles?product_id=40345':
//         return Promise.resolve({
//           data: mockStyleData.brightFutureSunglasses
//         });

//       case '/snuggie/products/styles?product_id=40346':
//         return Promise.resolve({
//           data: mockStyleData.morningJoggers
//       });
//       case '/snuggie/products/styles?product_id=40351':
//         return Promise.resolve({
//           data: mockStyleData.yEasy350
//       });
//       case '/snuggie/products/styles?product_id=40350':
//         return Promise.resolve({
//           data: mockStyleData.bluesSuedeShoes
//       });
//       // meta data
//       case '/snuggie/products/reviews/meta?product_id=40345':
//         return Promise.resolve({
//           data: mockStyleData.brightFutureSunglasses
//       });
//       case '/snuggie/products/reviews/meta?product_id=40346':
//         return Promise.resolve({
//           data: mockStyleData.morningJoggers
//       });
//       case '/snuggie/products/reviews/meta?product_id=40351':
//         return Promise.resolve({
//           data: mockStyleData.yEasy350
//       });
//       case '/snuggie/products/reviews/meta?product_id=40350':
//         return Promise.resolve({
//           data: mockStyleData.bluesSuedeShoes
//       });
//       default:
//         return Promise.reject(new Error('not found'));
//     }
//   });
//   const {rerender} = render(<RInCIndex productId={40344}/>);

//   await act(async () => {
//     rerender(<RInCIndex productId={40344}/>);
//   });

//   await waitFor(() => {
//     screen.findByText("Bright Future Sunglasses")
//   })

//   const related1 = await screen.findByText("Bright Future Sunglasses");
//   expect(related1).toBeTruthy();

//   // const related2 = await screen.findByText("Morning Joggers");
//   // expect(related2).toBeTruthy();

//   // const related3 = await screen.findByText("YEasy 350");
//   // expect(related3).toBeTruthy();

//   // const related4 = await screen.findByText("Blues Suede Shoes");
//   // expect(related4).toBeTruthy();

// })

test('test api call for related ids', async () => {
  axios.get.mockImplementation((url) => {
    if (url === '/snuggie/products') {
      return Promise.resolve({data: mockRelated.camoOnesieRelated})
    } else {
      console.log('booooo did not work');
    }
  });

  async function getRelated() {
    return axios.get('/snuggie/products')
    .then((res) => {
      return res
    })
    .catch((err) => {
      console.log('booo, error', err)
    })
  }

  expect(getRelated()).toEqual(mockRelated.camoOnesieRelated)
})