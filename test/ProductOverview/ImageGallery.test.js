import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

// Test if the image thumbnails on the left of the main image render correctly
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
  render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);
  await waitFor(() => { screen.getAllByAltText("ImageThumbnail") });
  const images = await screen.getAllByAltText("ImageThumbnail");
  expect(images).toHaveLength(6); // The Camo Onesie has 6 image thumbnails
});

// Test if the up and down scrolling arrows render correctly for the image thumbnails
test('Renders the up and down scroll arrow buttons for the image thumbnails when there are more than 8', async () => {
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
    // Render the widget
    render(<Overview productId={40348} chosenProduct={mockProductData.heirForceOne} />);
    await waitFor(() => { screen.getAllByAltText("ImageThumbnail") });
    const images = await screen.getAllByAltText("ImageThumbnail");
    expect(images).toHaveLength(7); // The Heir Force One has 11 image thumbnails, but only 7 should be shown
    // Make sure the down arrow is rendered
    expect(document.getElementsByClassName("fa-solid fa-arrow-down")).toBeTruthy();
    // Clicking the down arrow should render the up arrow
    await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-down"));
    expect(document.getElementsByClassName("fa-solid fa-arrow-up")).toBeTruthy();
    // 3 more clicks and the down arrow should not render anymore ()
    await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-down"));
    await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-down"));
    await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-down"));
    expect(document.getElementsByClassName("fa-solid fa-arrow-up")).toBeTruthy();
    expect(document.getElementsByClassName("fa-solid fa-arrow-down")).toBeFalsy();
});

// Test if the main image itself renders correctly
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
  render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);

});

// Test the left and right arrows on the sides of the main image
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
  render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);

});

// Test if the zoom functionality works here