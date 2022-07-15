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

// Test if all of the Style Thumbnails render correctly
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
  expect(styles).toHaveLength(6); // The Camo Onesie has 6 style thumbnails
});

// Test click functionality of the Style thumbnails
test('Style Selector clicking works', async () => {
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
  // Set up for user events (clicking!)
  const user = userEvent.setup();
  // Render the widget
  render(<Overview />);
  await waitFor(() => { screen.getAllByAltText("StyleThumbnail") }); // wait for style thumbnails to load
  // Simulate user clicking on a style thumbnail and test
  await user.click(screen.getByRole('', {}))
});