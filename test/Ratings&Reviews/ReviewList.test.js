import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ImageModal from '../../client/src/Components/RatingsAndReviews/ReviewList/ImageModal.jsx';
import ImagePool from '../../client/src/Components/RatingsAndReviews/ReviewList/ImagePool.jsx'
import ReviewList from '../../client/src/Components/RatingsAndReviews/ReviewList/ReviewList.jsx';
import Star from '../../client/src/Components/RatingsAndReviews/ReviewList/Star.jsx'
import StarRatingModal from  '../../client/src/Components/RatingsAndReviews/ReviewList/StarRatingReviewModal.jsx'
import axios from 'axios';
import mockReviewData from './mockReviewData.js';
import mockReviewMetaData from './mockReviewMetaData.js';


jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test('Renders ReviewList', async () => {

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

  await act( async () => {
    render(<ReviewList metaData={mockReviewMetaData.brightFutureSunglasses} productReviews={mockReviewData.brightFutureSunglasses}/>);
  })
});

test('Renders ImageModal', async () => {

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

  await act( async () => {
    render(<ImageModal pic={'this is a fake picture'}/>);
  })

});


test('Renders ImagePool', async () => {

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
  await act( async () => {
    render(<ImagePool
      key={2}
      photo={'photo goes here'}/>);
  })

});

test('Renders StarRatingModal', async () => {
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
  await act( async () => {
    render(<StarRatingModal/>)
  })

});