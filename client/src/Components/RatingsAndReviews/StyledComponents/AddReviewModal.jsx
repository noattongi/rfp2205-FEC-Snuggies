import styled from 'styled-components';
const StyleBackground =styled.div`
  backdrop-filter: blur(8px);
  display: block;
  position: fixed;
  z-index: 20;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
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

  `;

  const Image = styled.img`
  margin: auto;
  justify-content: center;
  display: block;
  width: 80%;
  height: 80%;
  max-width: 700px;
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

  const ProductName = styled.h3`
  width: 250px;
  align-items: right;
`;

export { StyleBackground, Container, ModalBody, Image, shrinkImage, ProductName};