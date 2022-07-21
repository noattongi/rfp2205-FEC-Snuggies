import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../../App.js'


var AddQuestion = ({chosenProduct, productId, postQuest, toggleModel}) => {
  var storage = useContext(GlobalContext);
  // var { _productId, _chosenProduct } = storage;

  var [questionEntry, setQuestionEntry] = useState('');
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');

  var postQuestion = (e) => {

    e.preventDefault()
    var body = {body: questionEntry, name: username, email: email, product_id: productId};

    if (body.body.length === 0 || body.name.length === 0 || body.email.length === 0) {
      alert(`Please don't leave any fields blank.`)
    } else {
      postQuest(body)
      toggleModel(false);
    };

    if (body.body.length > 60 || body.name.length > 1000 || body.email.length > 60) {
      alert('Error, length too long for the email, name, or question body.')
    }
  }

  return (
    <StyleBackground>
    <ModalContent>
   <CloseIcon className='fa-solid fa-xmark' onClick={() => toggleModel(false)}>  </CloseIcon>
     <ModalHeader>
       <ModalH2> Submit Your Question </ModalH2>
       <ModalSubtitleContainer>
           <ProductName> Product: {chosenProduct.name} </ProductName>
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
       <QuestionText required='' maxlength= '1000' onChange={e => setQuestionEntry(e.target.value)} value={questionEntry} placeholder='Add your question here...'> </QuestionText>
       <BottomButtonContainers>
           <SubmitButton onClick={postQuestion} > Post </SubmitButton>
       </BottomButtonContainers>
       </ModalBody>
    </ModalHeader>
    </ModalContent>
 </StyleBackground>
  )
};


var StyleBackground = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  z-index: 44;
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
  flex-direction: column;
`;

var NameWarningSpan = styled.span`
  font-size 12px;
  font-family: 'Nanum Gothic Coding', monospace;
`;

var EmailWarningSpan = styled.span`
  font-size 12px;
  font-family: 'Nanum Gothic Coding', monospace;
`;
var UserInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;
`;

var UserNameLabel = styled.label`
  font-weight: bold;
  font-family: 'Nanum Gothic Coding', monospace;
`;

var EmailLabel = styled.label`
  font-weight: bold;
  font-family: 'Nanum Gothic Coding', monospace;
`;

var UserNameInput = styled.input`
  width: 175px;
  font-family: 'Nanum Gothic Coding', monospace;
`;

var SubmitButton = styled.button`
  font-family: 'Nanum Gothic Coding', monospace;
  border: 2.4px solid black;
  font-weight: bold;
  border-radius: 5px;
  padding: 7.5px;
  background-color: white;
  :hover {
    cursor: pointer;
    background-color: #EF8354;
  };
`;

var EmailInput = styled.input`
  width: 280px;
  font-family: 'Nanum Gothic Coding', monospace;
`;
var QuestionText = styled.textarea`
  width: 700px;
  height: 300px;
  font-family: 'Nanum Gothic Coding', monospace;
`;

var BottomButtonContainers = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 10px;
`;

var CloseIcon = styled.i`
  position: absolute;
  display: flex;
  font-size: 35px;
  :hover {
    color: #EF8354;
    text-decoration: none;
    cursor: pointer;
  };
  height: 30px;
  right: 20px;
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
  font-family: 'Nanum Gothic Coding', monospace;
  padding-left: 245px;
`;

var ModalSubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 600px;
  justify-content: space-around;
`;

var ProductName = styled.h3`
  font-family: 'Nanum Gothic Coding', monospace;
  padding-right: 411.5px;
`;

var QuestionBody = styled.h3`
  font-family: 'Nanum Gothic Coding', monospace;
`;

var ModalContent = styled.div`
  display: flex;
  background-color: #fefefe;
  margin: 2% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 700px;
  justify-content: center;
  position: relative;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
`;

export default AddQuestion




