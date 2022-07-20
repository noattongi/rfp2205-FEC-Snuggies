import React from 'react';
import ReactDOM from 'react-dom';
import MoreAnsweredQuestions from '../../client/src/Components/QuestionsAndAnswers/BottomTabs/MoreAnsweredQuestions.jsx';
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
    render( <MoreAnsweredQuestions/>);
  })
});

afterEach(() => {
  if (console.error.mockRestore !== undefined) {
    console.error.mockRestore();
  }
});

test("check to see if More Answered Questions renders properly", async () => {
  // wait for the button to render
  await waitFor(() => screen.getByText("More Answered Questions"));
  const moreQuestions = await screen.getByText("More Answered Questions");
  expect(moreQuestions).toBeTruthy();
});


// test("check to see if more questions load after clicking on the button More Answered Questions button", async () => {
//   await waitFor(() => { screen.getByText("More Answered Questions") }); // wait for button to load

//   await userEvent.click(document.getElementById("12345"));
//   const newQuestions = await screen.getByText("How are you?")
//   expect(newQuestions).toBeTruthy();
// })
