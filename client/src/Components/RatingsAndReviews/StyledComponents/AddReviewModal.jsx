import styled from 'styled-components';
const StyleBackground =styled.div`
  backdrop-filter: blur(8px);
  display: block;
  position: fixed;
  z-index: 29;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 90%;
  height: 90%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);

  `;

  const Container = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  border-radius: 6px;

  `;

  const Image = styled.img`
  margin: auto;
  justify-content: center;
  display: block;
  width: 80%;
  height: 80%;
  max-width: 700px;
  max-height:800px;

  `;

  const shrinkImage = styled.div`
  justify-content: center;
  width: 200px;
  height: 200px;

  `;


const ModalBody = styled.div`
  flex: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  `;

  const ProductName = styled.div`
  width: 400px;
  text-align:center;
  display:flex;
  justify-content: center;
  font-family: 'Nanum Gothic Coding',monospace;
  font-weight: bold;
  font-size: 22px;


`;
const WriteTitle = styled.div`
width: 400px;
text-align:center;
display:flex;
justify-content: center;
font-family: 'Nanum Gothic Coding',monospace;
font-weight: bold;
font-size: 45px;

padding-bottom: 10px;
`;

const CloseButton = styled.button`
align-items: flex-end;
border-radius: 5px;
display: flex;
font-size: 15px;
flex-direction: row;
opacity: 0.9;
text-align: center;
padding-right: 5px;
font-family: 'Nanum Gothic Coding', monospace;
`;
const AM_TopContainer = styled.div`
border:solid;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const AM_FormContainer = styled.div`

`;
const AM_InputContainer = styled.div`

`;

export {AM_InputContainer, AM_FormContainer, WriteTitle, AM_TopContainer, CloseButton,  StyleBackground, Container, ModalBody, Image, shrinkImage, ProductName};