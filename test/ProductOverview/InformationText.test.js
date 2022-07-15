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

// Test if all of the text portions of the Information section (right of the Image Gallery) render correctly
test('Renders text components when given the Camo Onesie product', async () => {
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
  render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);
  // Check if the Reviews text renders (will need to be changed when the reviews text is finally implemented)
  const text = await screen.findAllByText("Read [#] Reviews");
  expect(text).toBeTruthy();
  // Check if the product name renders
  await waitFor(() => screen.getByText("Camo Onesie"));
  const productName = await screen.getByText("Camo Onesie");
  expect(productName).toBeTruthy();
  // Check if the Style Name renders (will need to be changed when styling refactoring is done)
  await waitFor(() => screen.getByText("Style > Forest Green & Black"))
  const styleName = await screen.getAllByText("Style > Forest Green & Black");
  expect(styleName).toHaveLength(1);
});

test('Renders text components when given the Bright Future Sunglasses product', async () => {
    axios.get.mockImplementation((url) => {
        switch (url) {
            case '/snuggie/products':
            return Promise.resolve({
                data: mockProductData.brightFutureSunglasses
            });
            case '/snuggie/styles':
            return Promise.resolve({
                data: mockProductStyles.brightFutureSunglassesStyles
            });
            default:
            return Promise.reject(new Error('not found'));
        }
    });
    render(<Overview productId={40345} chosenProduct={mockProductData.brightFutureSunglasses} />);
    await waitFor(() => screen.getByText("Bright Future Sunglasses"));
    const productName = await screen.getByText("Bright Future Sunglasses");
    expect(productName).toBeTruthy();
})