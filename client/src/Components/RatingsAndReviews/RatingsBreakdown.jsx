import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {Done, Progress, BodyContainer} from '../RatingsAndReviews/StyledComponents/BreakdownBars.jsx'

const StarBreakDown = (props) => {//done
	const [bars, setBars] = useState({});

	setTimeout(() => {
		const newBars = {
			opacity: 5,
			width: `${props.done}%`
		}
		setBars(newBars);
	}, 1);

	return (
    <BodyContainer>
		<Progress>
			<Done style={bars}>
      </Done>
      </Progress>
      </BodyContainer>
	)
}
export default StarBreakDown