import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RatingsAndReviewsIndex from '../../client/src/Components/RatingsAndReviews/RatingsAndReviewsIndex.jsx';
import axios from 'axios';
import mockReviewData from './mockReviewData.js';
import mockReviewMetaData from './mockReviewMetaData.js';
import mockProductData from '../ProductOverview/mockData/mockProductData.js';

jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test('Renders RatingsAndReviewsIndex', async () => {
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/reviews':
        return Promise.resolve({
          data: mockReviewData.camoOnesie
        });
      case '/snuggie/reviews/meta':
        return Promise.resolve({
          data: mockReviewMetaData.camoOnesieMetadata
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  await act( async () => {
    render(<RatingsAndReviewsIndex productId={40344} chosenProduct={mockProductData.camoOnesie}/>);
  })
});

