// Buttons that share to Social Media

// Import stuff
import React from 'react';
import styled from 'styled-components';

// Create styled components
const FacebookButton = styled.a`
  color: white;
  background-color: blue;
  border-radius: 4px;
`;
const TwitterButton = styled.div`
  color: white;
  background-color: cyan;
  border-radius: 4px;
`;
const PinterestButton = styled.a`

`;

// The Share Button components
const Facebook = () => {
  return (
    <div class="fb-share-button fa-brands fa-facebook" data-href="https://www.youtube.com/watch?v=eY52Zsg-KVI" data-layout="button" data-size="small">
      <FacebookButton target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DeY52Zsg-KVI&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore"> Share</FacebookButton>
    </div>
  );
}
const Twitter = () => {
  return (
    <TwitterButton>
      <a href=" https://twitter.com/intent/tweet?text=Check%20out%20this%20cool%20product%20I%20found%21&hashtags=Strings%2CCoolProduct%2CShopping" class="twitter-share-button fa-brands fa-twitter" data-show-count="false"> Tweet</a>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
    </TwitterButton>
  );
}
const Pinterest = () => {
  return (
    <PinterestButton href="//www.pinterest.com/pin/create/button/" class="pinterest" count-layout="none">
      <img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" alt="Pin it" />
    </PinterestButton>
  );
}

// Export
export { Facebook, Twitter, Pinterest };