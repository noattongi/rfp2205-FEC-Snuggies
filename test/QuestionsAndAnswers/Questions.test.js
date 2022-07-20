import React from 'react';
import ReactDOM from 'react-dom';
import QnaIndex from '../../client/src/Components/QuestionsAndAnswers/QnaIndex.jsx';
import { render, screen } from '@testing-library/react';
import axios from 'axios';
import { GlobalContext } from '../../client/src/Components/QuestionsAndAnswers/QnaIndex.jsx'
import mockProductData from './mockData/mockProductData.js';
import mockProductQuestionData from './mockData/mockQuestionData.js';

// create a mock axios
jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test("check to see if QnA Index renders properly", () => {
  // get request with the mock axios
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
      case 'snuggle/qna/questions':
        return Promise.resolve({
          data: mockProductData.mockProductQuestionData
        });
      default:
      return Promise.reject(new Error('not found'));
    }
  });

  // add mock data into storage variable
  // check to see widget renders

  render( <QnaIndex chosenProduct={mockProductData.camoOnesie} productId={mockProductData.camoOnesie.id}/>);

  const childComponent = screen.getByText(/Questions and Answers/i);
  expect(childComponent).toBeInTheDocument();
});

