import styled from 'styled-components';

const QnAListContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

//questionable?
const IndividualQuestDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const QuestionHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const HelpfulAndAddAnswerContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HelpfulAnswerSpan = styled.div`
  display: flex;
  padding-right: 7px;
`;

const AnswerListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

// adjust
const AddQuestionButton = styled.button`
  border-radius: 5px;
`;

const MoreAnsweredQuestionsButton = styled.button`
  border-radius: 5px;
`;

//adjust??
const LoadMoreAnswersButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  width: 9%;

`;

const QuestionSpan = styled.span`
  display: flex;
  font-weight: bold;
`;

export {QuestionSpan, QnAListContainer, AnswerListContainer, HelpfulAnswerSpan, IndividualQuestDiv, HelpfulAndAddAnswerContainer, QuestionHeaderContainer, LoadMoreAnswersButton, MoreAnsweredQuestionsButton, AddQuestionButton}