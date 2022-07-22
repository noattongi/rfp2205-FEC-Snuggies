import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import StarRating from '../SharedComponents/StarRating.jsx';

const OutfitCards = (props) => {
  const [products, setProducts] = useState([])
  useEffect(() => {
    setProducts(props.outfitProd.slice(props.outfitIndex, props.outfitIndex + 3))
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
        if (props.reviewData[i].product == id) {
          return props.reviewData[i].results
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
            <DeleteModaContainer>
              <DeleteModalDiv onClick = {(e) => {handleDeleteClick(prod.id)}}>❌</DeleteModalDiv>
            </DeleteModaContainer>
            <ThumbnailImage src={getUrl(prod.id)} />
            <TextContainer>
              <p>{prod.category}</p>
              <p>{prod.name}</p>
              <p>{prod.default_price}</p>
            </TextContainer>
            <RatingDiv>
              <StarRating reviewData={getRatings(prod.id)}/>
            </RatingDiv>
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
  border: 3px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  width: 260.906px;
  height: 403px;
  padding: 10px;
  background-color: #607B7D;
`;
const ThumbnailImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 251px;
  height: 251px;
  margin: 0px 0px 10px 0px;
  background-color: white;
  border: solid 2px;
  border-color: black;
  border-radius: 10px;
`;

const RatingDiv = styled.div`
  background-color: #3a606e;
  border: solid 2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 10px;
`;

const DeleteModalDiv = styled.div`
  position: absolute;
  font-size: 25px;
  margin: 15px 20px 0px 0px;
`;
const DeleteModaContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const TextContainer = styled.div`
  font-size: 18px;
  line-height: 5px;
`;