import React, {useState} from 'react';
import styled from 'styled-components';
var axios = require('axios');
// modal



// subtitle: needs product name and question body
var AddAnswer = ({q, toggleModal, postAnswer}) => {
  var [answerEntry, setAnswerEntry] = useState('');
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');

  var handleSubmit = (e) => {
    e.preventDefault();
    var body = {question_id: q.question_id, body: answerEntry, name: username, email: email, photos: []};
    if (body.body.length === 0 || body.name.length === 0 || body.email.length === 0) {
      alert(`Please don't leave any fields blank.`)
    } else {
      postAnswer(body);
      toggleModal(false);
    }
  };

  return (
    <div>
      <StyleBackground>
         <ModalContent>
        <CloseButton onClick={() => toggleModal(false)}> x </CloseButton>
          <ModalHeader>
            <ModalH2> Submit Your Answer </ModalH2>
            <ModalSubtitleContainer>
                <ProductName> Yeezys:  </ProductName>
                <QuestionBody> {q.question_body} </QuestionBody>
            </ModalSubtitleContainer>
            <ModalBody>
            <UserInfoContainer>
              <UserNameContainer>
              <UserNameLabel> User Nickname</UserNameLabel>
                <UserNameInput required='' value={username} onChange={e => setUsername(e.target.value)} maxlength='60' placeholder='Example: jack543!' />
                <NameWarningSpan>For privacy reasons, do not use <br/> your full name </NameWarningSpan>
              </UserNameContainer>
              <EmailContainer>
                <EmailLabel> Email Address </EmailLabel>
                <EmailInput required='' value={email} onChange={e => setEmail(e.target.value)} maxlength='60' placeholder='Example: jack@email.com'/>
                <EmailWarningSpan> For authentication reasons, you will not be emailed</EmailWarningSpan>
              </EmailContainer>

            </UserInfoContainer>
            <AnswerBody required='' maxlength= '1000' onChange={e => setAnswerEntry(e.target.value)} value={answerEntry} placeholder='Add your answer here...'> </AnswerBody>
            <BottomButtonContainers>
                <UploadButton> Upload Images </UploadButton>
                <SubmitButton onClick={handleSubmit}> Submit! </SubmitButton>
            </BottomButtonContainers>
            </ModalBody>
         </ModalHeader>

         </ModalContent>
      </StyleBackground>
    </div>
  )
}

// styled components
var StyleBackground = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 10;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(8px);
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

var UserNameContainer = styled.div`
  display: flex;
  flex-direction: column
`;


var EmailContainer = styled.div`
  display: flex;
  flex-direction: column
`;

var UploadButton = styled.button`

`;

var NameWarningSpan = styled.span`
  font-size 12px;
`;

var EmailWarningSpan = styled.span`
  font-size 12px;
`;
var UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

var UserNameLabel = styled.label`
  font-weight: bold;
`;

var EmailLabel = styled.label`
  font-weight: bold;
`;

var UserNameInput = styled.input`
  width: 175px;
`;

var SubmitButton = styled.button`

`;

var EmailInput = styled.input`
width: 280px;
`;
var AnswerBody = styled.textarea`
  width: 700px;
  height: 300px;
`;

var BottomButtonContainers = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;
var CloseButton = styled.button`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  height: 38px;
  position: relative;
  right: 200px;
  :hover {
    color: black;
    text-decoration: none;
    cursor: pointer;
  };
  :focus {
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
`;
var ModalBody = styled.div`
  display: flex;
  flex-direction: column;
`;
var ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

var ModalH2 = styled.h2`

`;

var ModalSubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 500px;
  justify-content: space-around;
`;

var ProductName = styled.h3`

`;

var QuestionBody = styled.h3`

`;

var ModalContent = styled.div`
  display: flex;
  background-color: #fefefe;
  margin: 2% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  justify-content: center;
`;
export default AddAnswer