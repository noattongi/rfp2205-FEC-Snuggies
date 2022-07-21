import React, {useState, useContext, useEffect} from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../../App.js'
var axios = require('axios');

var AddAnswer = ({chosenProduct, productId, urlImage, setURLImage, q, toggleModal, postAnswer}) => {
  var storage = useContext(GlobalContext);
  // var { _productId, _chosenProduct } = storage;

  // body data
  var [answerEntry, setAnswerEntry] = useState('');
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');
  var [photoURL, setPhotoURL] = useState([]);
  var [require, setRequire] = useState(false);
  var [emailMessage, setEmailMessage] = useState(false);

  var backupSubmit = (e) => {

    e.preventDefault();

    setEmailMessage(false);
    setRequire(false);

    var body = {question_id: q.question_id, body: answerEntry, name: username, email: email, photos: photoURL};

    if (answerEntry.length === 0 || username.length === 0 || email.length === 0) {
      setRequire(true);
    } else if (email.indexOf('@gmail.com') > 0 || email.indexOf('@yahoo.com') > 0 || email.indexOf('@aol.com') > 0 || email.indexOf('@email.com') > 0 ) {
      postAnswer(body);
      toggleModal(false);
    } else {
      setEmailMessage(true);
    };

  }

  var array = [];

  var widget = window.cloudinary.createUploadWidget({
    cloudName: 'dkzeszwgm',
    uploadPreset: 'presetFEC'
  }, (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('data', result.info.url)

      array.push(result.info.url);
      setPhotoURL(array)
      // setURLImage([...urlImage, result.info.url])
      console.log('what is photoURL', photoURL)
    }
  });


  var click = () => {
    widget.open()
  };

  return (
    <div>
      <StyleBackground>
         <ModalContent>
        <CloseIcon className="fa-solid fa-xmark" onClick={() => toggleModal(false)}></CloseIcon>
          <ModalHeader>
            <ModalH2> Submit Your Answer </ModalH2>
            {require && <RequireMessage>Please do not leave any fields blank!</RequireMessage>}
            {emailMessage && <RequireEmailMessage>Please use a valid email address!</RequireEmailMessage>}
            <ModalSubtitleContainer>
                <ProductName>Product:{chosenProduct.name}</ProductName>
                <QuestionBody> Question: {q.question_body}</QuestionBody>
            </ModalSubtitleContainer>
            <ModalBody>
            <UserInfoContainer>
              <UserNameContainer>
              <UserNameLabel> User Nickname<RequireUserName>*</RequireUserName></UserNameLabel>
                <UserNameInput required='' value={username} onChange={e => setUsername(e.target.value)} maxlength='60' placeholder='Example: jack543!' />
                <NameWarningSpan>For privacy reasons, do not use <br/> your full name </NameWarningSpan>
              </UserNameContainer>
              <EmailContainer>
                <EmailLabel> Email Address<RequireEmail>*</RequireEmail> </EmailLabel>
                <EmailInput required='' value={email} onChange={e => setEmail(e.target.value)} maxlength='60' placeholder='Example: jack@email.com'/>
                <EmailWarningSpan> For authentication reasons, you will not be <br/> emailed</EmailWarningSpan>
              </EmailContainer>

            </UserInfoContainer>
            <YourAnswerLabel>Your Answer<RequireAnswer>*</RequireAnswer></YourAnswerLabel>
            <AnswerBody required='' maxlength= '1000' onChange={e => setAnswerEntry(e.target.value)} value={answerEntry} placeholder='Add your answer here...'> </AnswerBody>
            <ImageContainer>
              {photoURL &&
                photoURL.map((each, i) => {
                  return (
                     <Images key={i} src={each} />
                  )
                })
              }
            </ImageContainer>
            <BottomButtonContainers>
              <Upload onClick={click} > Upload Images </Upload>
                {/* <UploadInput  onChange={handleFileInputChange} value={fileInput} type='file' hidden id='button'></UploadInput> */}
                {/* <UploadLabel htmlFor='button' > Upload File </UploadLabel> */}
                <SubmitButton onClick={backupSubmit}> Post </SubmitButton>
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
  z-index: 50;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(8px);
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

var RequireAnswer = styled.span`
  color: #E02929;
`;

var Upload = styled.button`
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

var RequireEmailMessage = styled.span`
  color: #E02929;
  font-family: 'Nanum Gothic Coding', monospace;
  position: absolute;
  top: 75;
  left: 335;
`;

var RequireMessage = styled.span`
  color: #E02929;
  font-family: 'Nanum Gothic Coding', monospace;
  position: absolute;
  top: 75;
  left: 335;
`;

var RequireEmail = styled.span`
  color: #E02929;
`;

var RequireUserName = styled.span`
  color: #E02929;
`;

var Images = styled.img`
  width: 150px;
  height: 150px;
`;

var YourAnswerLabel = styled.label`
  font-weight: bold;
  font-family: 'Nanum Gothic Coding', monospace;
`;

var ImageContainer = styled.div`
  padding-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

var UserNameContainer = styled.div`
  display: flex;
  flex-direction: column
`;

var UploadLabel = styled.label`
  background-color: white;
  color: black;
  padding: 0.1rem;
  border-radius: 0.1rem;
  cursor: pointer;
  border: 1px solid black;
  font-family: 'Nanum Gothic Coding', monospace;
`

var EmailContainer = styled.div`
  display: flex;
  flex-direction: column
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
var AnswerBody = styled.textarea`
  width: 700px;
  height: 200px;
  font-family: 'Nanum Gothic Coding', monospace;
`;

var BottomButtonContainers = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
`;

var CloseIcon = styled.i`
  font-size: 28px;
  height: 50px;
  padding-top: 20px;
  position: absolute;
  right: 23px;
  :hover {
    cursor: pointer;
    color: #EF8354;
  };

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
  padding-left: 250px;
`;

var ModalSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;


`;

var ProductName = styled.h3`
  width: 250px;
  font-family: 'Nanum Gothic Coding', monospace;
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
  width: 900px;
  position: relative;
  justify-content: center;
  border-radius: 10px;
  box-shadow: 0px 0.4rem 1.5rem rgb(0 0 0 / 25%);
`;
export default AddAnswer