import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import OverAllBreakDown from '../../client/src/Components/RatingsAndReviews/OverallBreakDown/OverallBreakdown.jsx';
import ProductBreakdown from '../../client/src/Components/RatingsAndReviews/OverallBreakDown/ProductBreakdown.jsx';
import StarBreakDown from '../../client/src/Components/RatingsAndReviews/OverallBreakDown/RatingsBreakdown.jsx';
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

test('Renders OverAllBreakDown', async () => {
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
    render(<OverAllBreakDown metaData={mockReviewData} reviewData={mockReviewData.ratings} fiveTotal={3} fourTotal={3} threeTotal={3} twoTotal={3} oneTotal={3}/>);

  })
  // const div = document.createElement('div');
  // ReactDOM.render(<OverAllBreakDown metaData={mockReviewData} reviewData={mockReviewData.ratings} fiveTotal={3} fourTotal={3} threeTotal={3} twoTotal={3} oneTotal={3}/>, div)
});

test('Renders ProductBreakdown', async () => {
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
    render(<ProductBreakdown characteristics={mockReviewMetaData.camoOnesieMetadata.characteristics}/>);

  })
  // const div = document.createElement('div');
  // ReactDOM.render(<OverAllBreakDown metaData={mockReviewData} reviewData={mockReviewData.ratings} fiveTotal={3} fourTotal={3} threeTotal={3} twoTotal={3} oneTotal={3}/>, div)
});



test('Renders StarBreakDown in RatingsBreakdown', async () => {
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
    render(<StarBreakDown done={5}/>);

  })
  // const div = document.createElement('div');
  // ReactDOM.render(<OverAllBreakDown metaData={mockReviewData} reviewData={mockReviewData.ratings} fiveTotal={3} fourTotal={3} threeTotal={3} twoTotal={3} oneTotal={3}/>, div)
});
