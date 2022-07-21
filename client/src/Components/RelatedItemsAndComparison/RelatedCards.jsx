import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import ComparisonModal from './ComparisonModal.jsx';
import ImagesModal from './ImagesModal.jsx'
import styled from 'styled-components';
import StarRating from '../SharedComponents/StarRating.jsx';

const RelatedCards = (props) => {
  const [modal, setModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [clickedProd, setClickedProd] = useState({});
  const [clickedImg, setClickedImg] = useState([]);
  const [imgModal, setImgModal] = useState(false);

  var modalToggle = () => {
    return setModal(!modal)
  }

  async function handleCardClick(id) {
    props.setProductId(id);
    props.setRelatedIndex(0);
  }

  var imgModalToggle = () => {
    return setImgModal(!imgModal)
  }
  useEffect(() => {
    setProducts(props.relatedProd.slice(props.relatedIndex, props.relatedIndex + 4));
  }, [props.relatedIndex, props.relatedProd])


  const handleClickImg = async (id) => {
    if (props.styles !== []) {
      for (var i = 0; i < props.styles.length; i++) {
        if (props.styles[i].product_id == id) {
          return props.styles[i].results[0].photos;
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
  const getRatings = (id) => {
    if (props.reviewData !== []) {
      for (var i = 0; i < props.reviewData.length; i++) {
        if (props.reviewData[i].product_id == id) {
          return props.reviewData[i].ratings
        }
      }
    }
  }

  const handleClickStar = async (prod) => {
    return prod;
  }
  return (
    <>
    {products?.map((prod) => {
      return (
          <CardBox key={prod.id}>
            <StarModalContainer>
              <StarModalDiv onClick={(e) => {handleClickStar(prod).then((data) => {setClickedProd(data)}).then(() => {modalToggle()})}}>⭐️</StarModalDiv>
            </StarModalContainer>
              {modal ? <ComparisonModal modalToggle = {modalToggle} clickedProd={clickedProd} chosenProduct={props.chosenProduct}/> : null }
              <ThumbnailImage src={getUrl(prod.id)} onClick={(e) => {handleClickImg(prod.id).then((data) => {setClickedImg(data)}).then(() => imgModalToggle())}}/>
                {imgModal ? <ImagesModal imgModalToggle = {imgModalToggle} clickedImg={clickedImg} /> : null }
              <HoverDiv onClick={(e) => {handleCardClick(prod.id)}}>
              <p>{prod.category}</p>
              <p>{prod.name}</p>
              <p>{prod.default_price}</p>
              <RatingDiv>
                <StarRating reviewData={getRatings(prod.id)}/>
              </RatingDiv>
            </HoverDiv>
          </CardBox>
       )})}
       </>
  )
}

export default RelatedCards;

// styled componenents
const CardBox = styled.div`
  position: flex;
  justify-content: flex-start;
  border: 3px solid black;
  border-radius: 10px;
  text-align: center;
  margin: 20px;
  width: 254px;
  height: 403px;
  padding: 10px;
  background-color: #607B7D;
  :hover {
    cursor: pointer;
    border-color: #EF8354;
    color: #EF8354;
  }
  flex-grow: 1;
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
  :hover {
    cursor: pointer;
    border-color: #EF8354;
  }
`;

const RatingDiv = styled.div`
  background-color: #3a606e;
  border: solid 2px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  margin: 10px;
  :hover {
    cursor: pointer;
    border-color: #EF8354;
  }
`;

const HoverDiv = styled.div`
  font-size: 18px;
  line-height: 5px;
  :hover {
    cursor: pointer;
  }
`;

const StarModalDiv = styled.div`
  position: absolute;
  font-size: 25px;
  margin: 5px 5px 0px 0px;
`;
const StarModalContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;