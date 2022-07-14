import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import toggleModal from '../Components/RatingsAndReviews/ReviewList/ReviewList.jsx'
import ReviewList from '../Components/RatingsAndReviews/ReviewList/ReviewList.jsx'
import AddReviewModal from '../Components/RatingsAndReviews/ReviewList/AddReviewModal.jsx'
import { render, screen } from '@testing-library/react';


it ('renders ReviewListIndex succesfully', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddReviewModal/>, div)
})




// describe('App tests', () => {
//     it('should contains the heading 1', () => {
//     render(<ReviewList />);
//         const heading = screen.getByText(/reviews/i);
//         expect(heading).toBeInTheDocument()
//     });
// });
// const { toggleModal } = require('./Components/RatingsAndReviews/ReviewList/ReviewList.jsx')



// describe('Renders Component without Crashing', () => {
// it ("renders AddQuestion succesfully", () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<AddQuestion/>, div)
// });

// it ('renders QuestionList crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<QuestionList/>, div)
// });

// it ('renders QnAIndex succesfully', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<QnaIndex/>, div)
// })


  // it('should do what I like', () => {
  //   var isOpen = false
  //   console.log(toggleModal)
  //   expect(toggleModal(!isOpen)).to.equal(true);
  // });
