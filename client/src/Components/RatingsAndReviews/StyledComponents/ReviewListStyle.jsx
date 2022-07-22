import styled from 'styled-components';

const ReviewListContainer = styled.div`
  border-style: dotted;
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
  padding-left: 40px;
  padding-right: 30px;
  padding-top: 10px;
  padding-bottom:10px;
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



export {RL_SubmitButton, RL_MoreButton, RL_BotContainer, ReviewListContainer, RL_TopContainer}