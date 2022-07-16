import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Overview from '../../client/src/Components/ProductOverview/Overview.jsx';
import axios from 'axios';
// Import mock data
import mockProductData from './mockData/mockProductData.js';
import mockProductStyles from './mockData/mockStyleData.js';
import mockMetadata from './mockData/mockReviewMetadata.js';

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
      case '/snuggie/reviews/meta':
        return Promise.resolve({
          data: mockMetadata.camoOnesieMetadata
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  // Render the widget
  await act( async () => {
    render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);
  })
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
            case '/snuggie/reviews/meta':
              return Promise.resolve({
                data: mockMetadata.heirForceOneMetadata
              });
            default:
              return Promise.reject(new Error('not found'));
        }
    });
    // Render the widget
    await act( async () => {
      render(<Overview productId={40348} chosenProduct={mockProductData.heirForceOne} />);
    })
    await waitFor(() => { screen.getAllByAltText("ImageThumbnail") });
    const images = await screen.getAllByAltText("ImageThumbnail");
    expect(images).toHaveLength(7); // The Heir Force One has 11 image thumbnails, but only 7 should be shown
    // Make sure the down arrow is rendered
    expect(document.getElementsByClassName("fa-solid fa-arrow-down").length).toBeTruthy();
    // Clicking the down arrow should render the up arrow
    await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-down")[0]);
    expect(document.getElementsByClassName("fa-solid fa-arrow-up").length).toBeTruthy();
    // 3 more clicks and the down arrow should not render anymore ()
    await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-down")[0]);
    await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-down")[0]);
    await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-down")[0]);
    expect(document.getElementsByClassName("fa-solid fa-arrow-up").length).toBeTruthy();
    expect(document.getElementsByClassName("fa-solid fa-arrow-down").length).toBeFalsy();
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
          case '/snuggie/reviews/meta':
            return Promise.resolve({
              data: mockMetadata.camoOnesieMetadata
            });
          default:
            return Promise.reject(new Error('not found'));
      }
  });
  await act( async () => {
    render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);
  })
  expect(document.getElementById("MainImage")).toBeTruthy();
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
          case '/snuggie/reviews/meta':
            return Promise.resolve({
              data: mockMetadata.camoOnesieMetadata
            });
          default:
            return Promise.reject(new Error('not found'));
      }
  });
  await act( async () => {
    render(<Overview productId={40344} chosenProduct={mockProductData.camoOnesie} />);
  })
  // Initially, the left arrow should not render but the right one should
  expect(document.getElementsByClassName("fa-solid fa-arrow-left").length).toBeFalsy();
  expect(document.getElementsByClassName("fa-solid fa-arrow-right").length).toBeTruthy();
  // After a click on the right arrow, both arrows should render
  await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-right")[0]);
  expect(document.getElementsByClassName("fa-solid fa-arrow-left").length).toBeTruthy();
  expect(document.getElementsByClassName("fa-solid fa-arrow-right").length).toBeTruthy();
  // After 4 more clicks on the right arrow, the right arrow should not render and the left one should (6 images in total --> 5 clicks total)
  await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-right")[0]);
  await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-right")[0]);
  await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-right")[0]);
  await userEvent.click(document.getElementsByClassName("fa-solid fa-arrow-right")[0]);
  expect(document.getElementsByClassName("fa-solid fa-arrow-left").length).toBeTruthy();
  expect(document.getElementsByClassName("fa-solid fa-arrow-right").length).toBeFalsy();
});

// Test if the zoom functionality works here