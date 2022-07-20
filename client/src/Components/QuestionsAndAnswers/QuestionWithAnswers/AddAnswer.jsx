import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../../App.js'
var axios = require('axios');

var AddAnswer = ({urlImage, setURLImage, q, toggleModal, postAnswer}) => {
  var storage = useContext(GlobalContext);
  var { _productId, _chosenProduct } = storage;

  // body data
  var [answerEntry, setAnswerEntry] = useState('');
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');
  var [photoURL, setPhotoURL] = useState([]);

  var backupSubmit = (e) => {
    e.preventDefault()
    var body = {question_id: q.question_id, body: answerEntry, name: username, email: email, photos: photoURL}
    postAnswer(body)
    toggleModal(false)
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
        <CloseButton onClick={() => toggleModal(false)}> x </CloseButton>
          <ModalHeader>
            <ModalH2> Submit Your Answer </ModalH2>
            <ModalSubtitleContainer>
                <ProductName> {_chosenProduct.name}:  </ProductName>
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
              <button onClick={click} > Upload Cloud</button>
                {/* <UploadInput  onChange={handleFileInputChange} value={fileInput} type='file' hidden id='button'></UploadInput> */}
                {/* <UploadLabel htmlFor='button' > Upload File </UploadLabel> */}
                <SubmitButton onClick={backupSubmit}> Submit! </SubmitButton>
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

var Images = styled.img`
  width: 150px;
  height: 150px;
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

var UploadInput = styled.input`

`;

var UploadLabel = styled.label`
  background-color: white;
  color: black;
  padding: 0.1rem;
  border-radius: 0.1rem;
  cursor: pointer;
  border: 1px solid black;
`

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
  height: 200px;
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
  width: 250px;
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