import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Done, Progress, BodyContainer, Triangle, Range} from '../../RatingsAndReviews/StyledComponents/BreakdownBars.jsx'

const ProductBreakDown = (props) => {//done
  // console.log(props)
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
      <div>
        {sizeSliderValue !== 0 &&
          <div>
            <div>Size<Range type="range" min="1" max="100" readOnly value={sizeSliderValue}  id="size" /></div>
            <div><span>Too Small</span> <span>Perfect</span><span>Too Large</span></div>
          </div>}
        {widthSliderValue !== 0 &&
          <div>
            <div>Width<Range type="range" min="1" max="100" readOnly value={widthSliderValue}  id="width" /></div>
            <div><span>Too Narrow</span> <span>Perfect</span><span>Too wide</span></div>
          </div>}
        {comfortSliderValue !== 0 &&
          <div>
            <div>Comfort<Range type="range" min="1" max="100" readOnly value={comfortSliderValue}  id="comfort" /></div>
            <div><span>Uncomfortable</span><span>Perfect</span></div>
          </div>}
        {qualitySliderValue !== 0 &&
          <div>
            <div>Quality<Range type="range" min="1" max="100" readOnly value={qualitySliderValue}  id="quality" /></div>
            <div><span>Poor</span><span>Perfect</span></div>
          </div>}
        {lengthSliderValue !== 0 &&
        <div>
          <div>Length<Range type="range" min="1" max="100" readOnly value={lengthSliderValue}  id="length" /></div>
          <div><span>Runs Short</span> <span>Perfect</span><span>Runs Long</span></div>
        </div>}
          {fitSliderValue !== 0 &&
          <div>
            <div>Fit<Range type="range" min="1" max="100"  readOnly value={fitSliderValue}  id="fit" /></div>
            <div><span>Runs Tight</span><span>Perfect</span><span>Runs Long</span></div>
          </div>}
	    </div>
  )
}
export default ProductBreakDown;