import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ComparisonModal = (props) => {
    return (
    <ModalBackground onClick={(e) => {props.modalToggle()}}>
      {console.log('comp', props.clickedProd)}
      <ModalContainer>
        <ModalBody>
        <div>
          <p>{props.clickedProd.name}</p>
          <p>___________________________</p>
          <p>✅</p>
          <p>❌</p>
          <p>✅</p>
          <p>❌</p>
          <p>✅</p>
        </div>
        <div>
          <p>Comparison Metrics</p>
          <p>___________________________</p>
          <p>Delivered by Carson's plane</p>
          <p>Woven from Aaron's luscious locks</p>
          <p>Guarantees you pass the TA</p>
          <p>Does not contain copied code</p>
          <p>Something else made up</p>
        </div>
        <div>
          <p>{props.chosenProduct.name}</p>
          <p>___________________________</p>
          <p>✅</p>
          <p>❌</p>
          <p>❌</p>
          <p>✅</p>
          <p>✅</p>
        </div>
      </ModalBody>
    </ModalContainer>
  </ModalBackground>
  )
}

export default ComparisonModal;

const ModalBackground =styled.div`
  backdrop-filter: blur(8px);
  display: block;
  position: fixed;
  z-index: 27;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
  `;

  const ModalContainer = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 60%;
  `;

  const ModalBody = styled.div`
  flex: 50%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  font-size: 1rem;
  text-align: center;
  `;
