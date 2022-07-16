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
	  color: black;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  height: 100%;
	  width: 0;
	  opacity: 0;
	  transition: 1s ease 0.3s;
  `;

  export {Done, Progress, BodyContainer, AllStarsBodyContainer}