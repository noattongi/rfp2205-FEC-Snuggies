import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

export default function Navbar() {

  return (
    <NavbarContainer>
      <LogoContainer>
      <LogoSpan> Strings </LogoSpan>
      </LogoContainer>
      <SearchContainer>
      <Search type="input"></Search>
      <SearchBlock></SearchBlock>
      <SearchLogo className='fa-solid fa-magnifying-glass'> </SearchLogo>
      </SearchContainer>
      <LinksContainer>
        <RelatedItemsSpan> <Ra href='#RelatedItems'>Related Items</Ra> </RelatedItemsSpan>
        <QnaIndexSpan> <Qa href= '#QnA'>Questions and Answers</Qa></QnaIndexSpan>
        <ReviewSpan><Reva href='#Reviews'>Reviews</Reva></ReviewSpan>
      </LinksContainer>
    </NavbarContainer>
  )
};

// styled components;
var NavbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #3a606e;
  margin: 1px;
  height: 50px;
  border-radius: 5px;
  position: relative;
`;

var Ra = styled.a`
  :visited {
    color:white;
  };
  :hover {
    color: #EF8354;
  }
`;

var Reva = styled.a`
  :visited {
    color:white;
  };
  :hover {
    color: #EF8354;
  }
`;

var SearchLogo = styled.i`
  position: absolute;
  right: -20;
  font-size: 25px;
  bottom: 13
`;

var SearchBlock = styled.span`
  background-color: #EF8354;
  height: 35.3px;
  width: 35.5px;
  position: absolute;
  right: -24.8;
  top: 7.4;
  border-radius: 0 5px 5px 0;
`;

var LogoSpan = styled.span`
  font-family: 'Pacifico', cursive;
  font-size: 44px;
  font-weight: bold;
  position: relative;
  bottom: 15;
  left: 20
`;

var SearchContainer = styled.span`
  display:flex;
  position: relative;
`;

var Search = styled.input`
  height: 5.5vh;
  posiiton:absolute;
  width: 50vw;
  border-radius: 5.5px;
  font-size: 19px;
  margin: 6px 4px 4px 4px;
  position: relative;
  right: -30px;
`;
var Qa = styled.a`
  :visited {
    color:white;
  };
  :hover {
    color: #EF8354;
  }
`;


var LogoContainer = styled.span`

`;

var LinksContainer = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 30%;
  margin: 2px;
`;

var ReviewSpan = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  color: white;
  display: flex;
  border: 0.75px solid #3a606e;
  padding: 13px 4px 4px 4px;
  :hover{
    border-color: #EF8354;
  }
`;

var QnaIndexSpan = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  color: white;
  display: flex;
  border: 0.75px solid #3a606e;
  padding: 13px 4px 4px 4px;
  :hover{
    border-color: #EF8354;
  }
`;

var RelatedItemsSpan = styled.span`
  font-family: 'Nanum Gothic Coding', monospace;
  color: white;
  display: flex;
  border: 0.75px solid #3a606e;
  padding: 13px 4px 4px 4px;
  :hover{
    border-color: #EF8354;
  }
`;