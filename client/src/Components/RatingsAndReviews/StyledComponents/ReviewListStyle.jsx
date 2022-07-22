import styled from 'styled-components';

const ReviewListContainer = styled.div`
  width:100%;
  max-height:100vh;
  overflow: auto
`;
const RL_TopContainer = styled.div`
  display: flex;
  font-size: 15px;
  flex-direction: row;
  opacity: 0.9;
  text-align: center;
  padding-left: 37px;
  padding-right: 30px;
  margin-top: 40px;
  padding-bottom:35px;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const RL_BotContainer = styled.div`
  display: flex;
  font-size: 15px;
  text-align: center;
  padding-left: 40px;
  padding-top:10px;
  padding-bottom: 10px;
  font-family: 'Nanum Gothic Coding', monospace;
`;
const RL_MoreButton = styled.button`
  border-radius: 5px;
  display: flex;
  font-size: 15px;
  flex-direction: row;
  opacity: 0.9;
  text-align: center;
  padding-right: 5px;
  font-family: 'Nanum Gothic Coding', monospace;
`;
const RL_SubmitButton = styled.button`
  border-radius: 5px;
  display: flex;
  font-size: 15px;
  opacity: 0.9;
  text-align: center;
  margin-left: 5px;
  font-family: 'Nanum Gothic Coding', monospace;
`;

const RL_Sort = styled.div`
font-weight: bolder;
font-size: 14px;
ont-family: 'Roboto',sans-serif;
padding-right: 5px;
`;



export {RL_Sort, RL_SubmitButton, RL_MoreButton, RL_BotContainer, ReviewListContainer, RL_TopContainer}