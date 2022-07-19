import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReviewTiles from '../../client/src/Components/RatingsAndReviews/ReviewList/ReviewTiles.jsx';
import axios from 'axios';
// Import mock data
import mockReviewData from './mockReviewData.js';
import mockReviewMetaData from './mockReviewMetaData.js';
import mockProductData from '../ProductOverview/mockData/mockProductData.js';
//passing
// Mock axios using jest
jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test('Renders ReviewTiles', async () => {
  // Intercept any axios requests made by the component being tested and return the mockup data instead
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/reviews':
        return Promise.resolve({
          data: mockReviewData.camoOnesie
        });
      case '/snuggie/reviews/meta':
        return Promise.resolve({
          data: mockReviewMetaData.camoOnesieMetaData
        });
      default:
        return Promise.reject(new Error('not found'));
    }
  });
  // Render the widget
  await act( async () => {
    render(<ReviewTiles
      key={1}
      reviews={mockReviewData.camoOnesie}
      metaData= {mockReviewMetaData.camoOnesie}/>);

  })
  // const div = document.createElement('div');
  // ReactDOM.render(<OverAllBreakDown metaData={mockReviewData} reviewData={mockReviewData.ratings} fiveTotal={3} fourTotal={3} threeTotal={3} twoTotal={3} oneTotal={3}/>, div)
});