import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import StarBreakDown from '../OverallBreakDown/RatingsBreakdown.jsx'
import StarRating from '../../SharedComponents/StarRating.jsx'
import {Done, Progress, BodyContainer, AllStarsBodyContainer} from '../../RatingsAndReviews/StyledComponents/BreakdownBars.jsx'
import {OBStar,RRContainer, SingleBar, BarText, RBStarsNum, RBRecommended, OBContainer, NumRatingTitle} from '../../RatingsAndReviews/StyledComponents/R&RContainer.jsx'
import ProductBreakDown from '../OverallBreakDown/ProductBreakdown.jsx'
const OverAllBreakDown = (props) => {//done
	// console.log(props
	// 	, 'prooooss')
	const [averageStars, setAverageStars] = useState(0);
	const [recommendProduct, setRecommendProduct] = useState(0);

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
			<SingleBar>
				<BarText><u>5 stars</u> </BarText><StarBreakDown done={props.fiveTotal}/>
			</SingleBar>
			<SingleBar>
			<BarText><u>4 stars</u></BarText><StarBreakDown done={props.fourTotal}/>
			</SingleBar>
			<SingleBar>
			<BarText><u>3 stars</u></BarText><StarBreakDown done={props.threeTotal}/>
			</SingleBar>
			<SingleBar>
			<BarText><u>2 stars</u></BarText><StarBreakDown done={props.twoTotal}/>
			</SingleBar>
			<SingleBar>
			<BarText><u>1 stars</u></BarText><StarBreakDown done={props.oneTotal}/>
			</SingleBar>
		</AllStarsBodyContainer>
		<ProductBreakDown characteristics={props.metaData.characteristics}/>
		</OBContainer>
	)
}
export default OverAllBreakDown