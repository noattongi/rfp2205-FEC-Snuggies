import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import StarRating from '../SharedComponents/StarRating.jsx';

const OutfitCards = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(props.outfitProd.slice(props.outfitIndex, props.outfitIndex + 4))
  }, [props.outfitProd, props.outfitId])

  async function handleDeleteClick(id) {
    if (props.outfitId.length > 1) {
      var temp = props.outfitId.splice(props.outfitId.indexOf(id) - 1, 1);
      return props.setOutfitId(temp);
    } else {
      return props.setOutfitId([]);
    }
  }
  const getRatings = (id) => {
    if (props.reviewData !== []) {
      for (var i = 0; i < props.reviewData.length; i++) {
        if (props.reviewData[i].product_id == id) {
          return props.reviewData[i].ratings
        }
      }
    }
  }
  const getUrl = (id) => {
    if (props.styles !== []) {
      for (var i = 0; i < props.styles.length; i++) {
        if (props.styles[i].product_id == id) {
          return props.styles[i].results[0].photos[0].thumbnail_url
        }
      }
    }
  }

  return (
    <>
    {Boolean(products !== []) ? products?.map((prod) => {
      return (
          <CardBox key={prod.id}>
            <div onClick = {(e) => {handleDeleteClick(prod.id)}}>❌</div>
            <ThumbnailImage src={getUrl(prod.id)} />
            <p>{prod.category}</p>
            <p>{prod.name}</p>
            <p>{prod.default_price}</p>
            <StarRating reviewData={getRatings(prod.id)}/>
            </CardBox>
       )}): null}
       </>
  )
}

export default OutfitCards;

// styled component
const CardBox = styled.div`
  position: flex;
  justify-content: flex-start;
  border: 1px solid black;
  text-align: center;
  margin: 20px;
  width: 19%;
`;

const ThumbnailImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 62px;
  height: 62px;
  background-color: white;

  border: solid;
  border-color: black;
  :hover {
    cursor: pointer;
  }
`;