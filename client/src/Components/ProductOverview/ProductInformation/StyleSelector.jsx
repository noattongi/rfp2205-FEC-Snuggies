// The component that houses all of the styles and their thumbnails

// Import stuff
import React, { useState } from 'react';
import { StyleThumbnailContainer } from '../StyledComponents/Containers.jsx';
import StyleThumbnail from '../StyledComponents/ProductInformation/StyleThumbnail.jsx';

// The component
var Styles = (props) => {

  return (
    <div>
      <StyleThumbnailContainer>
        <StyleThumbnail src="https://is2-ssl.mzstatic.com/image/thumb/qJ7YKor8fRTpFepcEyMzJQ/1200x675mf.jpg"></StyleThumbnail>
        <StyleThumbnail src="https://external-preview.redd.it/_ysVY46s4W2COAnR769iuSMM-bTPFrhH_YmJS2WeDnw.jpg?auto=webp&s=ab4dad2ccf5caf76fa1f8107e6a727295862ec45"></StyleThumbnail>
        <StyleThumbnail src="https://pbs.twimg.com/profile_images/676614171849453568/AZd1Bh-s_400x400.png"></StyleThumbnail>
        <StyleThumbnail src="https://i.ytimg.com/vi/gBCEJBOwewg/hqdefault.jpg"></StyleThumbnail>
      </StyleThumbnailContainer>
    </div>
  );
}

// Export it
export default Styles;