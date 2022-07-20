import React from 'react';
import ReactDOM from 'react-dom';
import IndividualQuestions from '../../client/src/Components/QuestionsAndAnswers/QuestionWithAnswers/IndividualQuestions.jsx';
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
    render( <IndividualQuestions question={mockProductQuestionData.results[0]} productId={mockProductData.camoOnesie.id} chosenProduct={mockProductData.camoOnesie}/>);
  })
});

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test("check to see if Individual Questions renders properly", async () => {
  // wait for the button to render
  await waitFor(() => screen.getByText("Q: Do you know the muffin man?"));
  const IndividualQ = await screen.getByText("Q: Do you know the muffin man?");
  expect(IndividualQ).toBeTruthy();
});