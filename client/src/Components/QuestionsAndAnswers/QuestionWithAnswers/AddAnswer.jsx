import React, {useState} from 'react'
import styled from 'styled-components'
// modal

// subtitle: needs product name and question body
var AddAnswer = ({q, toggleModal}) => {
  return (
    <div>
      <StyleBackground>
         <ModalContent>
        <CloseButton onClick={() => toggleModal(false)}> x </CloseButton>
          <ModalHeader>
            <ModalH2> Submit Your Answer </ModalH2>
            <ModalSubtitleContainer>
                <ProductName> Yeezys:  </ProductName>
                <QuestionBody> {q} </QuestionBody>
            </ModalSubtitleContainer>
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
  padding-top: 100px;
  width: 100%;
  height: 100%;
  overflow: auto;
  backdrop-filter: blur(8px);
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

var CloseButton = styled.button`
  color: #aaa;
  font-size: 28px;
  font-weight: bold;
  height: 43%;
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

var ModalHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

var ModalH2 = styled.h2`

`;

var ModalSubtitleContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

var ProductName = styled.span`

`;

var QuestionBody = styled.span`

`;

var ModalContent = styled.div`
  display: flex;
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;
export default AddAnswer