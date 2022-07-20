import React from 'react';
import ReactDOM from 'react-dom';
import AddQuestion from '../../client/src/Components/QuestionsAndAnswers/BottomTabs/AddQuestion.jsx';
import { render, screen, act, waitFor} from '@testing-library/react';
import axios from 'axios';
import { GlobalContext } from '../../client/src/Components/QuestionsAndAnswers/QnaIndex.jsx'
import mockProductData from './mockData/mockProductData.js';
import mockProductQuestionData from './mockData/mockQuestionData.js';
import userEvent from '@testing-library/user-event';

// create a mock axios
jest.mock('axios');

beforeEach(async () => {
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

  await act( async () => {
    render( <AddQuestion chosenProduct={mockProductData.camoOnesie}/>);
  })
});

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test("check to see if Add Question renders properly", async () => {
  // wait for the button to render
  await waitFor(() => screen.getByText("For authentication reasons, you will not be emailed"));
  const addQuestion = await screen.getByText("For authentication reasons, you will not be emailed");
  expect(addQuestion).toBeTruthy();
});