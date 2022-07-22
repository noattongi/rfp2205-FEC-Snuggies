// Buttons that share to Social Media

// Import stuff
import React from 'react';
import styled from 'styled-components';

// Create styled components
const FacebookButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #4979c1;
  border-radius: 4px;
  width: 80px;
  height: 20px;
`;
const TwitterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: #45C0DC;
  border-radius: 4px;
  width: 80px;
  height: 20px;
`;
const PinterestButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c3423f;
  background-color: #F5F5F5;
  border-radius: 4px;
  width: 80px;
  height: 20px;
`;

const Socials = styled.div`
  width: 120px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

// The Share Button components
const Facebook = () => {
  return (
    <FacebookButton data-href="https://www.youtube.com/watch?v=eY52Zsg-KVI" data-layout="button" data-size="small">
      <div href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeY52Zsg-KVI&amp;src=sdkpreparse" target="_blank" className="fb-xfbml-parse-ignore fb-share-button fa-brands fa-facebook"></div>
    </FacebookButton>
  );
}
const Twitter = () => {
  return (
    <TwitterButton>
      <div href=" https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20product%20I%20found%21&hashtags=Strings%2CCoolProduct%2CShopping" target="_blank" className="twitter-share-button fa-brands fa-twitter" data-show-count="false"></div>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
    </TwitterButton>
  );
}
const Pinterest = () => {
  return (
    <PinterestButton>
      <div href="//www.pinterest.com/pin/create/button/" target="_blank" className="pinterest fa-brands fa-pinterest" count-layout="none"></div>
    </PinterestButton>
  );
}

// Export
export { Facebook, Twitter, Pinterest, Socials };