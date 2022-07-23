import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Done, Progress, BodyContainer, Triangle, Range} from '../../RatingsAndReviews/StyledComponents/BreakdownBars.jsx'
import {PBContainer, CharName, CharRating, CharContainer, PBCharContainer} from '../../RatingsAndReviews/StyledComponents/R&RContainer.jsx'

const ProductBreakDown = (props) => {

  const [sizeSliderValue, setSizeSliderValue] = useState(0);
  const [widthSliderValue, setWidthSliderValue] = useState(0);
  const [comfortSliderValue, setComfortSliderValue] = useState(0);
  const [qualitySliderValue, setQualitySliderValue] = useState(0);
  const [lengthSliderValue, setLengthSliderValue] = useState(0);
  const [fitSliderValue, setFitSliderValue] = useState(0);



  useEffect(() => {
    var averageChar = (rating) => {
    var average = (rating * 100) / 5
      return average;
    }
   if(props.characteristics) {
     if(props.characteristics.Fit) {
      var averageFit = averageChar(props.characteristics.Fit.value);
       setFitSliderValue(averageFit);
     }
   }
   if(props.characteristics) {
     if(props.characteristics.Length) {
      var averageLength = averageChar(props.characteristics.Length.value);
       setLengthSliderValue(averageLength);
     }
   }
   if(props.characteristics) {
     if(props.characteristics.Quality) {
        var averageQuality = averageChar(props.characteristics.Quality.value);
       setQualitySliderValue(averageQuality);
     }
   }
   if(props.characteristics) {
     if(props.characteristics.Comfort) {
      var averageComfort = averageChar(props.characteristics.Comfort.value);
       setComfortSliderValue(averageComfort);
     }
   }
   if(props.characteristics) {
     if(props.characteristics.Width) {
      var averageWidth = averageChar(props.characteristics.Width.value);
       setWidthSliderValue(averageWidth);
     }
   }
   if(props.characteristics) {
     if(props.characteristics.Size) {
      var averageSize = averageChar(props.characteristics.Size.value);
       setSizeSliderValue(averageSize);
     }
   }
  }, [props.characteristics, fitSliderValue]);

  	return (
      <PBContainer>
        {sizeSliderValue !== 0 &&
          <PBCharContainer>
            <CharName>Size</CharName>
              <div><Range type="range" min="1" max="100" readOnly value={sizeSliderValue}  id="size" /></div>
              <CharContainer><CharRating>Too Small</CharRating> <CharRating>Perfect</CharRating><CharRating>Too Large</CharRating></CharContainer>
          </PBCharContainer>}
        {widthSliderValue !== 0 &&
          <PBCharContainer>
            <CharName>Width</CharName>
              <div><Range type="range" min="1" max="100" readOnly value={widthSliderValue}  id="width" /></div>
              <CharContainer><CharRating>Too Narrow</CharRating> <CharRating>Perfect</CharRating><CharRating>Too wide</CharRating></CharContainer>
          </PBCharContainer>}
        {comfortSliderValue !== 0 &&
          <PBCharContainer>
            <CharName>Comfort</CharName>
              <div><Range type="range" min="1" max="100" readOnly value={comfortSliderValue}  id="comfort" /></div>
              <CharContainer><CharRating>Uncomfortable</CharRating><CharRating>Perfect</CharRating></CharContainer>
          </PBCharContainer>}
        {qualitySliderValue !== 0 &&
          <PBCharContainer>
            <CharName>Quality</CharName>
              <div><Range type="range" min="1" max="100" readOnly value={qualitySliderValue}  id="quality" /></div>
              <CharContainer><CharRating>Poor</CharRating><CharRating>Perfect</CharRating></CharContainer>
          </PBCharContainer>}
        {lengthSliderValue !== 0 &&
        <PBCharContainer>
          <CharName>Length</CharName>
            <div><Range type="range" min="1" max="100" readOnly value={lengthSliderValue}  id="length" /></div>
            <CharContainer><CharRating>Runs Short</CharRating> <CharRating>Perfect</CharRating><CharRating>Runs Long</CharRating></CharContainer>
        </PBCharContainer>}
          {fitSliderValue !== 0 &&
          <PBCharContainer>
            <CharName>Fit</CharName>
              <div><Range type="range" min="1" max="100"  readOnly value={fitSliderValue}  id="fit" /></div>
              <CharContainer><CharRating>Runs Tight</CharRating><CharRating>Perfect</CharRating><CharRating>Runs Long</CharRating></CharContainer>
          </PBCharContainer>}
	    </PBContainer>
  )
}
export default ProductBreakDown;