import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Overview from '../../client/src/Components/ProductOverview/Overview.jsx';
import axios from 'axios';
// Import mock data
import mockProductData from './mockData/mockProductData.js';
import mockProductStyles from './mockData/mockStyleData.js';
import mockMetadata from './mockData/mockReviewMetadata.js'

// Mock axios using jest
jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

// Test if the dropdowns render correctly
test('Size and Quantity Dropdowns render correctly', async () => {
  // Intercept any axios requests made by the component being tested and return the mockup data instead
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/products':
        return Promise.resolve({
          data: mockProductData.camoOnesie
        });
      case '/snuggie/styles':
        return Promise.resolve({
          data: mockProductStyles.camoOnesieStyles
        });
      case '/snuggie/reviews/meta':
        return Promise.resolve({
          data: mockMetadata.camoOnesieMetadata
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  // Render the widget
  act(() => {
    render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);
  })
  await waitFor(() => { screen.getAllByAltText("StyleThumbnail") });
  expect(document.getElementById("size-select")).toBeTruthy();
  expect(document.getElementById("quantity-select")).toBeTruthy();
});

// Test if Add To Cart button renders correctly
test('Add To Cart button renders correctly', async () => {
  // Intercept any axios requests made by the component being tested and return the mockup data instead
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/products':
        return Promise.resolve({
          data: mockProductData.camoOnesie
        });
      case '/snuggie/styles':
        return Promise.resolve({
          data: mockProductStyles.camoOnesieStyles
        });
      case '/snuggie/reviews/meta':
        return Promise.resolve({
          data: mockMetadata.camoOnesieMetadata
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  // Render the widget
  act(() => {
    render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);
  })
  await waitFor(() => { screen.getAllByAltText("StyleThumbnail") }); // wait for data to load
  // Simulate user clicking on a style thumbnail and test if that thumbnail becomes the chosen one
  const addToCartButton = await screen.getAllByText("Add to Cart");
  expect(addToCartButton.length).toBeTruthy();
});

// Test if Add To Cart button works as intended
test('Add To Cart button sends POST request', async () => {
  // Intercept any axios requests made by the component being tested and return the mockup data instead
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/products':
        return Promise.resolve({
          data: mockProductData.camoOnesie
        });
      case '/snuggie/styles':
        return Promise.resolve({
          data: mockProductStyles.camoOnesieStyles
        });
      case '/snuggie/reviews/meta':
        return Promise.resolve({
          data: mockMetadata.camoOnesieMetadata
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  axios.post.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/cart':
        return Promise.resolve({
          data: "success"
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  })
  // Render the widget
  act(() => {
    render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);
  })
  await waitFor(() => { expect(document.getElementsByClassName("fa-solid fa-arrow-right").length).toBeTruthy(); }); // wait for data to load
  // Simulate user clicking Add to Cart button without selecting size
  await userEvent.click(screen.getByText("Add to Cart"));
  // Check that warning message displays
  expect(document.getElementById("sizeWarning")).toBeTruthy();
  // Simulate user selecting size
  await userEvent.selectOptions(document.getElementById("size-select"), 'S');
  // Simulate user clicking Add to Cart without selecting quantity
  await userEvent.click(screen.getByText("Add to Cart"));
  // Check that warning message displays
  expect(document.getElementById("quantityWarning")).toBeTruthy();
  // Simulate user selecting quantity
  userEvent.selectOptions(document.getElementById("quantity-select"), '1');
  // Check for post request results
  await userEvent.click(screen.getByText("Add to Cart"));
});