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
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const AM_FormContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
justify-content: start;
`;
const AM_InputContainer = styled.div`
flex-direction: column;
justify-content: start;
display: flex;
`;

const AM_StarContainer = styled.div`
display: block;
flex-direction: row;
align-items: left;
align-text: left;
display: flex;
`;
const AM_Label = styled.label`
font-size: 15px;
font-weight:bold;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 5px;
font-family: 'Nanum Gothic Coding', monospace;
display: flex;
align-items: left;
`;
const AM_Stars = styled.div`
align-items: left;
font-size: 16px;
font-weight:bold;
padding-top: 5px;
padding-bottom: 5px;
font-family: 'Nanum Gothic Coding', monospace;

`;
const CharContainer = styled.div`

font-size: 15px;
font-weight:bold;
padding-top: 5px;
font-family: 'Nanum Gothic Coding', monospace;
display: flex;
align-items: left;
flex-direction:column;
`;
const SingleCharact = styled.div`

font-size: 15px;
font-weight:bold;
padding-right: 5px;
font-family: 'Nanum Gothic Coding', monospace;
display: flex;
align-items: left;
flex-direction:column;
`;

const AM_CharTop = styled.div`

font-size: 15px;
font-weight:bold;
padding-right: 5px;
font-family: 'Nanum Gothic Coding', monospace;
display: flex;
align-items: left;
`;
const AM_NoneSelect = styled.div`

font-size: 12px;
font-weight:bold;
padding-right: 5px;
font-family: 'Nanum Gothic Coding', monospace;
display: flex;
flex-direction:row;
`;
const AM_CharName = styled.div`



flex-direction:column;

font-size: 14px;
font-weight:bold;
font-family: 'Nanum Gothic Coding', monospace;

`;
const SingleRadioContainer = styled.label`

input[type=radio] {
  display: block;
  margin: 0 auto;
}
label {
  font-size: 10px;
  display: inline-block;
}
`;
const OverallRadioContainer = styled.label`

flex-direction:row;
display: flex;
justify-content: space-between;
`;

const BodyText = styled.textarea`
  width: 700px;
  height: 300px;
  font-family: 'Nanum Gothic Coding', monospace;
`;
const BodyContainerModal = styled.label`

flex-direction:column;
display: flex;

`;
const BodyName = styled.div`
flex-direction:column;
text-align:  left;
font-size: 14px;
font-weight:bold;
font-family: 'Nanum Gothic Coding', monospace;
`;
const BodyCounter = styled.div`
flex-direction:column;
text-align:  right;
font-size: 12px;
font-weight:bold;
font-family: 'Nanum Gothic Coding', monospace;
`;
const AM_SummaryContainer = styled.label`
border:solid;
flex-direction:column;
display: flex;

`;
export {AM_SummaryContainer, BodyCounter, BodyName, BodyContainerModal, BodyText, OverallRadioContainer, SingleRadioContainer, AM_CharName, AM_NoneSelect, AM_CharTop, SingleCharact, CharContainer, AM_Stars, AM_Label, AM_StarContainer, AM_InputContainer, AM_FormContainer, WriteTitle, AM_TopContainer, CloseButton,  StyleBackground, Container, ModalBody, Image, shrinkImage, ProductName};