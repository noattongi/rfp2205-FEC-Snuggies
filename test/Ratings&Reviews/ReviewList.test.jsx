import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewList from '../../client/src/Components/RatingsAndReviews/ReviewList/ReviewList.jsx';
import axios from 'axios';
// Import mock data
import mockReviewData from './mockReviewData.js';
import mockReviewMetaData from './mockReviewMetaData.js';

// Mock axios using jest
jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test('Renders ReviewList', async () => {
  // Intercept any axios requests made by the component being tested and return the mockup data instead
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/reviews':
        return Promise.resolve({
          data: mockReviewData.camoOnesie
        });
      case '/snuggie/reviews/meta':
        return Promise.resolve({
          data: mockReviewMetaData.camoOnesieStyles
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  // Render the widget
  await act( async () => {
    render(<ReviewList metaData={mockReviewMetaData.brightFutureSunglasses} productReviews={mockReviewData.brightFutureSunglasses}/>);
  })
  const div = document.createElement('div');
    ReactDOM.render(<ReviewList metaData={mockReviewMetaData.brightFutureSunglasses} productReviews={mockReviewData.brightFutureSunglasses}/>, div)

  // await waitFor(() => { screen.getAllByAltText("ImageThumbnail") });
  // const images = await screen.getAllByAltText("ImageThumbnail");
  // expect(images).toHaveLength(6); // The Camo Onesie has 6 image thumbnails
});

