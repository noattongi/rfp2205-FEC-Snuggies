import styled from 'styled-components'

const IndividualAnswerContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

// adjust
const AnswerSpan = styled.span`
  height: 1rem;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const BottomInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

//adjust
const LoadMoreAnswersButton = styled.button`
  border-radius: 5px
`;

//adjust
const PosterAndDateSpan = styled.span`
  height: 1rem;
`;

//adjust
const AnswerHelpfulnessSpan = styled.span`
  height: 1rem;
`;

//adjust
const ReportSpan = styled.span`
  height: 1rem;
`;

//adjust
const AddAnswerButton = styled.button`
  border-radius: 5px;
`;

export {IndividualAnswerContainer, AnswerSpan, ImageContainer, BottomInfoContainer, LoadMoreAnswersButton, ReportSpan, AnswerHelpfulnessSpan, PosterAndDateSpan, AddAnswerButton }