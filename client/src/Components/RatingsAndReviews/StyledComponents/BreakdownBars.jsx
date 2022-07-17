import styled from 'styled-components';

  const BodyContainer =styled.div`
    flex-direction: column;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    border-style:dotted;
  `;

  const AllStarsBodyContainer =styled.div`
  flex-direction: column;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border-style:solid;
  border-color: coral;
  padding-left: 20px
`;

  const Progress =styled.div`
	  background-color: lightgray;
	  position: relative;
	  margin: 15px 0;
	  height: 15px;
	  width: 150px;
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
  `;

  const Triangle = styled.div`
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 20px solid black;
  `;

  const Range = styled.input`
  -webkit-appearance: none;
  width: 90%;
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

//   &::-moz-range-thumb {
//     -webkit-appearance: none;
// appearance: none;
// width: 0;
// height: 0;
// border-left: 100px solid transparent;
// border-right: 100px solid transparent;
// border-top: 172px solid black;
// }