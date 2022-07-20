import React from 'react';
import ReactDOM from 'react-dom';
import QnaIndex from '../../client/src/Components/QuestionsAndAnswers/QnaIndex.jsx';
import { render, screen, act} from '@testing-library/react';
import axios from 'axios';
import { GlobalContext } from '../../client/src/Components/QuestionsAndAnswers/QnaIndex.jsx'
import mockProductData from './mockData/mockProductData.js';
import mockProductQuestionData from './mockData/mockQuestionData.js';
import userEvent from '@testing-library/user-event';

// create a mock axios
jest.mock('axios');

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test("check to see if QnA Index renders properly", async () => {
  // get request with the mock axios
  axios.get.mockImplementation((url) => {
    switch (url) {
      case '/snuggie/products':
        return Promise.resolve({
          data: mockProductData.camoOnesie
        });
      case '/snuggie/qa/questions':
        return Promise.resolve({
          data: mockProductData.mockProductQuestionData
        });
      default:
      return Promise.reject(new Error('not found'));
    }
  });

  // add mock data into storage variable
  // check to see widget renders
  await act( async () => {
    render( <QnaIndex chosenProduct={mockProductData.camoOnesie} productId={mockProductData.camoOnesie.id}/>);
  })

});

