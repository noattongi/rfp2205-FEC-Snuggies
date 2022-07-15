// The component housing the shared Star Rating component and the link to 'Read [#] Reviews'

// Import stuff
import React, { useState } from 'react';
import { ProductOverviewStarContainer } from '../StyledComponents/Containers.jsx';
import ReviewsLink from '../StyledComponents/ProductInformation/OverviewStars.jsx';
import StarRating from '../../SharedComponents/StarRating.jsx';

// The component
var OverviewStars = (props) => {

  return (
    <ProductOverviewStarContainer>
      <StarRating reviews={{
    "product": "40344",
    "page": 0,
    "count": 10,
    "results": [
        {
            "review_id": 1135846,
            "rating": 2,
            "summary": "sdfds",
            "recommend": true,
            "response": null,
            "body": "sdfdsf",
            "date": "2022-02-22T00:00:00.000Z",
            "reviewer_name": "sdfsdf",
            "helpfulness": 47,
            "photos": []
        },
        {
            "review_id": 1135856,
            "rating": 1,
            "summary": "THIS IS A GREEEAAAT REVIEW",
            "recommend": false,
            "response": null,
            "body": "BEST REVIEW EVER WOW OMG WOW THIS REVIEW IS JUST FANTASTIC OH WOW OMG",
            "date": "2022-02-22T00:00:00.000Z",
            "reviewer_name": "Daniel",
            "helpfulness": 12,
            "photos": []
        },
        {
            "review_id": 1135863,
            "rating": 1,
            "summary": "inny is posting a photo for real!!",
            "recommend": false,
            "response": null,
            "body": "LOL",
            "date": "2022-02-23T00:00:00.000Z",
            "reviewer_name": "inny",
            "helpfulness": 5,
            "photos": [
                {
                    "id": 2180151,
                    "url": "http://res.cloudinary.com/dhx5k7wb3/image/upload/v1645581629/hl4mjxfu8xtzxcdk1cr1.jpg"
                }
            ]
        },
        {
            "review_id": 1135860,
            "rating": 4,
            "summary": "gd",
            "recommend": false,
            "response": null,
            "body": "grere",
            "date": "2022-02-23T00:00:00.000Z",
            "reviewer_name": "he",
            "helpfulness": 3,
            "photos": []
        },
        {
            "review_id": 1135908,
            "rating": 2,
            "summary": "f",
            "recommend": true,
            "response": null,
            "body": "f",
            "date": "2022-02-24T00:00:00.000Z",
            "reviewer_name": "f",
            "helpfulness": 1,
            "photos": []
        },
        {
            "review_id": 1135867,
            "rating": 1,
            "summary": "pleasee!!",
            "recommend": false,
            "response": null,
            "body": "work!!!",
            "date": "2022-02-23T00:00:00.000Z",
            "reviewer_name": "inny",
            "helpfulness": 1,
            "photos": [
                {
                    "id": 2180154,
                    "url": "http://res.cloudinary.com/dhx5k7wb3/image/upload/v1645590890/s1vgzd5agk9eju3rimna.png"
                },
                {
                    "id": 2180155,
                    "url": "http://res.cloudinary.com/dhx5k7wb3/image/upload/v1645590885/tpgtuyvejehvgmiyz4c1.jpg"
                }
            ]
        },
        {
            "review_id": 1135864,
            "rating": 5,
            "summary": "haha photo!",
            "recommend": false,
            "response": null,
            "body": "PHOTOPHOTO",
            "date": "2022-02-23T00:00:00.000Z",
            "reviewer_name": "inny",
            "helpfulness": 1,
            "photos": [
                {
                    "id": 2180152,
                    "url": "http://res.cloudinary.com/dhx5k7wb3/image/upload/v1645581994/hfn5ygz1chey1fdocdlt.png"
                }
            ]
        },
        {
            "review_id": 1135893,
            "rating": 4,
            "summary": "yess",
            "recommend": true,
            "response": null,
            "body": "letsgoo",
            "date": "2022-02-24T00:00:00.000Z",
            "reviewer_name": "hi",
            "helpfulness": 0,
            "photos": [
                {
                    "id": 2180173,
                    "url": "http://res.cloudinary.com/dhx5k7wb3/image/upload/v1645687824/hflmezuz03c7h5pk8b4x.jpg"
                },
                {
                    "id": 2180174,
                    "url": "http://res.cloudinary.com/dhx5k7wb3/image/upload/v1645687824/cqcftjnunmyheyof0o2u.jpg"
                }
            ]
        },
        {
            "review_id": 1135873,
            "rating": 5,
            "summary": "This camo onesie is a dream",
            "recommend": true,
            "response": null,
            "body": "camooooooooooooooo",
            "date": "2022-02-23T00:00:00.000Z",
            "reviewer_name": "monks",
            "helpfulness": 0,
            "photos": []
        },
        {
            "review_id": 1135872,
            "rating": 2,
            "summary": "yayayayayaya\nayayyaya\nayayaya\nayayya\n",
            "recommend": true,
            "response": null,
            "body": "yayaya\n\nayayay\naya\na",
            "date": "2022-02-23T00:00:00.000Z",
            "reviewer_name": "ya",
            "helpfulness": 0,
            "photos": []
        }
    ]
}} />
      <ReviewsLink>Read [#] Reviews</ReviewsLink>
    </ProductOverviewStarContainer>
  );
}

// Export it
export default OverviewStars;