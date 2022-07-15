import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Overview from '../../client/src/Components/ProductOverview/Overview.jsx';
import axios from 'axios';
// Import mock data
import mockProductData from './mockData/mockProductData.js';
import mockProductStyles from './mockData/mockStyleData.js';

// Mock axios using jest
jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

// Test if all of the components of the Image Gallery render correctly
test('Renders image thumbnails', async () => {
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
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  // Render the widget
  render(<Overview />);

});

test('Renders the up and down scroll wheels for the image thumbnails when there are more than 8', async () => {
    axios.get.mockImplementation((url) => {
        switch (url) {
            case '/snuggie/products':
            return Promise.resolve({
                data: mockProductData.heirForceOne
            });
            case '/snuggie/styles':
            return Promise.resolve({
                data: mockProductStyles.heirForceOneStyles
            });
            default:
            return Promise.reject(new Error('not found'));
        }
    });
    render(<Overview />);

});

test('Renders the main image', async () => {
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
          default:
          return Promise.reject(new Error('not found'));
      }
  });
  render(<Overview />);

});

test('Renders the left and right arrows on the sides of the main image', async () => {
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
          default:
          return Promise.reject(new Error('not found'));
      }
  });
  render(<Overview />);

});