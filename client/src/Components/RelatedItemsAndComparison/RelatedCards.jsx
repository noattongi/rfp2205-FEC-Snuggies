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
            <div onClick={(e) => {handleClickStar(prod).then((data) => {setClickedProd(data)}).then(() => {modalToggle()})}}>⭐️</div>
              {modal ? <ComparisonModal modalToggle = {modalToggle} clickedProd={clickedProd} chosenProduct={props.chosenProduct}/> : null }
              <ThumbnailImage src={getUrl(prod.id)} onClick={(e) => {handleClickImg(prod.id).then((data) => {setClickedImg(data)}).then(() => imgModalToggle())}}/>
                {imgModal ? <ImagesModal imgModalToggle = {imgModalToggle} clickedImg={clickedImg} /> : null }
              <div onClick={(e) => {handleCardClick(prod.id)}}>
              <p>{prod.category}</p>
              <p>{prod.name}</p>
              <p>{prod.default_price}</p>
              <StarContainer>
                <StarRating reviewData={getRatings(prod.id)}/>
              </StarContainer>
            </div>
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
  border: 1px solid black;
  text-align: center;
  margin: 20px;
  width: 25%;
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

const StarContainer = styled.div`
  position: flex;
  margin: 20px;
`;