import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import StarBreakDown from '../OverallBreakDown/RatingsBreakdown.jsx'
import StarRating from '../../SharedComponents/StarRating.jsx'
import {Done, Progress, BodyContainer, AllStarsBodyContainer} from '../../RatingsAndReviews/StyledComponents/BreakdownBars.jsx'
import {OBStar,RRContainer, SingleBar, BarText, RBStarsNum, RBRecommended, OBContainer, NumRatingTitle} from '../../RatingsAndReviews/StyledComponents/R&RContainer.jsx'
import ProductBreakDown from '../OverallBreakDown/ProductBreakdown.jsx'
const OverAllBreakDown = (props) => {//done
	// console.log(props, 'porps in overall breakdown')
	const [averageStars, setAverageStars] = useState(0);
	const [recommendProduct, setRecommendProduct] = useState(0);
	const [filterArray, setFilterArray] = useState([])



	var filterOnClick = (event) => {
		var numValue = Number(event.target.getAttribute('value'));
		return props.filterTheReviews(numValue);
	}

  var capToFourth = (number) => {
  return (25 * Math.floor(number / 25));
}

useEffect(() => {
	if(props.reviewData) {
	  let rating = 0;
	  let data = props.reviewData;
	  rating = (data["1"] * 1) + (data["2"] * 2) + (data["3"] * 3) + (data["4"] * 4) + (data["5"] * 5);
	  var average = rating / (data["1"] * 1 + data["2"] * 1 + data["3"] * 1 + data["4"] * 1 + data["5"] * 1)
		var roundedAverage = Math.floor(average * 4) / 4
		setAverageStars(roundedAverage);
	}


	if(props.metaData.recommended ) {
    var recommendTotal = Number(props.metaData.recommended.false) + Number(props.metaData.recommended.true);
		var recommendedAverage = (props.metaData.recommended.true / recommendTotal);
		setRecommendProduct((Math.floor(recommendedAverage * 100)));
	}
}, [props.reviewData, props.metadata]);



	return (
		<OBContainer>
			<RBStarsNum>
			  <NumRatingTitle>{averageStars && averageStars}</NumRatingTitle>
		    <OBStar><StarRating reviewData={props.reviewData} /></OBStar>
		  </RBStarsNum>
		<RBRecommended> {recommendProduct}% of reviews recommend this product</RBRecommended>
		<AllStarsBodyContainer>
			<SingleBar >
				<BarText ><u value='5' onClick={filterOnClick} >5 stars</u> </BarText><StarBreakDown done={props.fiveTotal}/>
				{props.metaData.ratings && <BarText>({props.metaData.ratings[5]})</BarText>}
			</SingleBar>
			<SingleBar>
			  <BarText ><u value='4' onClick={filterOnClick}>4 stars</u></BarText><StarBreakDown done={props.fourTotal}/>
			  {props.metaData.ratings && <BarText>({props.metaData.ratings[4]})</BarText>}
			</SingleBar>
			<SingleBar>
			<BarText><u value='3' onClick={filterOnClick} >3 stars</u></BarText><StarBreakDown done={props.threeTotal}/>
			{props.metaData.ratings && <BarText>({props.metaData.ratings[3]})</BarText>}
			</SingleBar>
			<SingleBar>
			<BarText ><u value='2' onClick={filterOnClick}>2 stars</u></BarText><StarBreakDown done={props.twoTotal}/>
			{props.metaData.ratings && <BarText>({props.metaData.ratings[2]})</BarText>}
			</SingleBar>
			<SingleBar>
			<BarText ><u value='1' onClick={filterOnClick}>1 stars</u></BarText><StarBreakDown done={props.oneTotal}/>
			{props.metaData.ratings && <BarText>({props.metaData.ratings[1]})</BarText>}
			</SingleBar>
		</AllStarsBodyContainer>
		<ProductBreakDown characteristics={props.metaData.characteristics}/>
		</OBContainer>
	)
}
export default OverAllBreakDown

