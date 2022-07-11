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
  justify-content: space-around;
  width: 20%;
  font-size: 12px;
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
  background-color: orange;
  border-radius: 5px;
`;

export {IndividualAnswerContainer, AnswerSpan, ImageContainer, BottomInfoContainer, ReportSpan, AnswerHelpfulnessSpan, PosterAndDateSpan, AddAnswerButton }