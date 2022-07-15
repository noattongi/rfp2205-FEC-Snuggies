import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
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

// Test if all of the text portions of the Information section (right of the Image Gallery) render correctly
test('Style Selectors render properly for Camo Onesie', async () => {
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
  await waitFor(() => { screen.getAllByAltText("StyleThumbnail") });
  const styles = await screen.getAllByAltText("StyleThumbnail");
  expect(styles).toHaveLength(6);

});