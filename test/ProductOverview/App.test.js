import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../client/src/App.js';
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

test('App renders', async () => {
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

  act(() => {
    render(<App />);
  })
  await waitFor(() => { expect(screen.getByText("Add to Cart")).toBeTruthy() });
  expect(document.getElementById("size-select")).toBeTruthy();
  expect(document.getElementById("quantity-select")).toBeTruthy();
});