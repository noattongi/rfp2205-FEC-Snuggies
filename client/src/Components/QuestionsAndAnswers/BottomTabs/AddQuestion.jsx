import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../../App.js'


var AddQuestion = ({postQuest, toggleModel}) => {
  var storage = useContext(GlobalContext);
  var { _productId, _chosenProduct } = storage;

  var [answerEntry, setAnswerEntry] = useState('');
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');

  var postQuestion = (e) => {

    e.preventDefault()
    var body = {body: answerEntry, name: username, email: email, product_id: _productId};

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
   <CloseButton onClick={() => toggleModel(false)}> x </CloseButton>
     <ModalHeader>
       <ModalH2> Submit Your Question </ModalH2>
       <ModalSubtitleContainer>
           <ProductName> About the {_chosenProduct.name}  </ProductName>
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
           <SubmitButton onClick={postQuestion} > Submit! </SubmitButton>
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

export default AddQuestion






// styled components
// var StyledBackground = styled.div`
//   display: flex;
//   position: fixed;
//   flex-direction: column;
//   z-index: 10;
//   left: 0;
//   top: 0;
//   width: 100%;
//   height: 100%;
//   overflow: auto;
//   backdrop-filter: blur(8px);
//   background-color: rgb(0,0,0);
//   background-color: rgba(0,0,0,0.4);
// `;

// var ModalSquare = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   padding-left: 250px;
//   padding-right: 250px;
// `;

// var UserNameLabel = styled.label`
//   font-weight: bold;
// `;

// var EmailLabel = styled.label`
//   font-weight: bold;
// `;

// var EmailInfoContainer = styled.div`
//   display:flex;
//   flex-direction: column;
// `;
// var ModalHeader = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// var ModalH2 = styled.h2`

// `;

// var ModalBody = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// var ProductName = styled.h3`

// `;

// var TopContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;

// var UserInfoContainer = styled.div`
//   display: flex;
//   flex-direction: column;
// `;

// var ModalContent = styled.div`
//   display: block;
//   background-color: #fefefe;
//   margin: 2% auto;
//   padding: 20px;
//   border: 1px solid #888;
//   width: 80%;
// `;

// var CloseButton = styled.button`
//   color: #aaa;
//   font-size: 28px;
//   font-weight: bold;
//   height: 38px;
//   position: absolute;
//   left: 175px;
//   :hover {
//     color: black;
//     text-decoration: none;
//     cursor: pointer;
//   };
//   :focus {
//     color: black;
//     text-decoration: none;
//     cursor: pointer;
//   }
// `




// <StyledBackground>
// <ModalContent>
//   <ModalSquare>
// <CloseButton onClick={() => toggleModel(false)}> x </CloseButton>
//   <ModalBody>
//     <ModalHeader>
//       <ModalH2> Ask Your Question Here </ModalH2>
//       <ProductName> About the [Product Name] </ProductName>
//     </ModalHeader>
//       <TopContainer>

//       <UserInfoContainer>
//         <UserNameLabel>User Nickname</UserNameLabel>
//       </UserInfoContainer>

//       <EmailInfoContainer>
//         <EmailLabel> Email Address </EmailLabel>
//       </EmailInfoContainer>
//       </TopContainer>

//   </ModalBody>
//   </ModalSquare>
// </ModalContent>
// </StyledBackground>