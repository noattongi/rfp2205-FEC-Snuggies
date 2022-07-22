import styled from 'styled-components';

  const BodyContainer =styled.div`
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;

  `;

  const AllStarsBodyContainer =styled.div`
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  padding-left: 20px;
  margin: 0;

`;

  const Progress =styled.div`
	  background-color: lightgray;
	  position: relative;
	  margin: 11px 0;
	  height: 13px;
	  width: 165px;
    border-radius: 25px;
  `;


  const Done = styled.div`
    background: mediumseagreen;
	  box-shadow: 0 3px 3px -5px black, 0 2px 5px grey;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  height: 100%;
	  width: 0;
	  opacity: 0;
	  transition: 1s ease 0.3s;
    border-radius: 25px;
  `;

  const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 6px solid transparent;
    border-top: 20px solid black;
  `;

  const Range = styled.input`
  -webkit-appearance: none;
  width: 216px;
  background: transparent;


  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 36px;
    width: 16px;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 15px solid black;
    z-index: 5;
    margin-top: 0px;
  }

  &::-webkit-slider-runnable-track{
    background: lightgrey;
    height: 10px;
  }

  `;

  export {Done, Progress, BodyContainer, AllStarsBodyContainer, Triangle, Range}

