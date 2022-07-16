// require('dotenv').config();
import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../../App.js'
import {Image} from 'cloudinary-react'
var axios = require('axios');

// const { cloudinary } = require('../../cloudinary.config.js')
// var cloudinary = require('cloudinary').v2




var AddAnswer = ({q, toggleModal, postAnswer}) => {
  var storage = useContext(GlobalContext);
  var { _productId, _chosenProduct } = storage;

  // body data
  var [answerEntry, setAnswerEntry] = useState('');
  var [username, setUsername] = useState('');
  var [email, setEmail] = useState('');
  var [photoURL, setPhotoURL] = useState([]);
  // var [imgURL, setImgURL] = useState('');

  // image data
  var [fileInput, setFileInput] = useState('');
  var [previewSource, setPreviewSource] = useState('');

  var handleFileInputChange = (e) => {
    e.preventDefault();
    const file  = e.target.files[0];

    previewFile(file)
  };

  var previewFile = (file) => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource([...previewSource, reader.result])
      console.log('what is preview source', previewSource)
    }
  };

  var handleSubmit = (e) => {
    e.preventDefault();

    uploadImage(previewSource);

  };

  var uploadImage = (encodedImage) => {
    axios.post('/snuggie/upload', {data: encodedImage})
    .then((val) => {
      // console.log('cloudinary data received', val);
      axios.get('/snuggie/upload/get', {params: { len: previewSource.length}})
      .then((val) => {
        console.log('what is val of cloud', val)
        var body = {question_id: q.question_id, body: answerEntry, name: username, email: email, photos: val.data};

        if (body.body.length > 60 || body.name.length > 1000 || body.email.length > 60) {
          alert('Error, length too long for the email, name, or answer body.')
        };

        if (body.body.length === 0 || body.name.length === 0 || body.email.length === 0) {
          alert(`Please don't leave any fields blank.`)
        } else {
          postAnswer(body);
          toggleModal(false);
        };
      })
      .catch((error) => {
        console.log('error within get cloudinary data')
      })
    })
    .catch((error) => {
      console.log('error with uploading Image from client side')
    })
  };

  // var chooseFile = (e) => {
  //   var img = e.target.files[0];
  //   console.log('log here', img)
  //   setImgURL([...imgURL, URL.createObjectURL(img)]);
  // };

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
              {/* {imgURL !== '' &&
                imgURL.map((each) => {
                  return (
                    <Images src={each}/>
                  )
                })
              } */}
              {previewSource &&
                previewSource.map((each, i) => {
                  return (
                     <Images key={i} src={each} />
                  )
                })
              }
            </ImageContainer>
            <BottomButtonContainers>
                <UploadInput  onChange={handleFileInputChange} value={fileInput} type='file' hidden id='button'></UploadInput>
                <UploadLabel htmlFor='button' > Upload File </UploadLabel>
                {/* <UploadInput  type='file' hidden id='button'></UploadInput>
                <UploadLabel onChange= {chooseFile} htmlFor='button' > Upload File </UploadLabel> */}
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