import styled from 'styled-components';

const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  `;

const UserandDate = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: grey
  opacity: 0.7;
  padding-bottom: 20px;
  padding-bottom: 20px;
`;

const Summary = styled.div`
  padding-bottom: 20px;
  padding-bottom: 20px;
  font-weight: bold;
`;

const ReviewBody = styled.div`
padding-bottom: 20px;
padding-bottom: 20px;
`;

const RecommendProduct = styled.div`
padding-bottom: 20px;
padding-bottom: 20px;
`

var BottomInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 40%;
  font-size: 12px;
`;

var AnswerHelpfulnessSpan = styled.span`

`;

var ReportSpan = styled.span`
  text-decoration: underline;
`;


export { TopContainer, UserandDate, Summary, RecommendProduct, ReviewBody, ReportSpan, AnswerHelpfulnessSpan, BottomInfoContainer};

