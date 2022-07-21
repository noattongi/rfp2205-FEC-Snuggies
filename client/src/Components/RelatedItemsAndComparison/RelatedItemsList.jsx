import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RelatedCards from './RelatedCards.jsx';
import RelatedCarouselRight from './RelatedCarouselRight.jsx';
import RelatedCarouselLeft from './RelatedCarouselLeft.jsx';
import styled from 'styled-components';

const RelatedItemsList = (props) => {
  const [relatedId, setRelatedId] = useState([]);
  const [relatedProd, setRelatedProd] = useState([]);
  const [relatedIndex, setRelatedIndex] = useState([]);
  const [styles, setStyles] = useState([]);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    if (props.productId) {
      getRelated(props.productId)
      .then((data) => {
        console.log('data', data)
        var temp = []
        data.forEach((id) => {
          temp.push(props.getProduct(id))
        })
        return temp;
      })
      .then((array) => {
        Promise.all(array)
        .then((values) => {
          setRelatedProd(values)
        })
      })
      .catch((error) => {
        console.log('useEffect error', error)
      })
    }
  }, [props.productId, relatedIndex]);

  async function getRelated(productId) {
    console.log('product id', productId);
    return axios.get('/snuggie/products', {params: {product_id: productId + '/related'}})
    .then((response) => {
      setRelatedId(response.data);
      console.log('res data', response.data)
      return response.data
    })
    .catch((error) => {
      console.log('Error in getRelated', error)
    })
  }

  async function getStyles(id) {
    return axios.get('/snuggie/styles', {params: {product_id: id}})
    .then((res) => {
      return res.data
    })
  }

  async function stylesArray() {
    var temp = [];
    relatedId.forEach((id) => {
      temp.push(getStyles(id));
    })
    return temp;
  }

  useEffect(() => {
    stylesArray()
    .then((array) => {
      Promise.all(array)
      .then((values) => {
        setStyles(values)
      })
    })
    .catch((err) => {
      console.log('styles error', err)
    })
  }, [relatedId])

  async function getStars(id) {
    return axios.get('/snuggie/reviews/meta', { params: { product_id: id }})
        .then((res) => {
          return res.data;
        })
        .catch((error) => {
          console.log('Error in getting review metadata from server', error);
        })
  }
  async function starsArray() {
    var temp = [];
    relatedId.forEach((id) => {
      temp.push(getStars(id));
    })
    return temp;
  }
  useEffect(() => {
    starsArray()
    .then((array) => {
      Promise.all(array)
      .then((values) => {
        setReviewData(values)
      })
    })
  }, [relatedId])

  return (
    <>
    <h3>Related List</h3>
    <RelatedItemsListContainer>
          <CarouselContainer>
            {Boolean(relatedId.length > 4) ? <RelatedCarouselLeft relatedIndex={relatedIndex} setRelatedIndex={setRelatedIndex} relatedProd={relatedProd}/> : null}
          </CarouselContainer>
            <Row>
            <RelatedCards setRelatedIndex={setRelatedIndex} relatedProd = {relatedProd} setProductId={props.setProductId} relatedIndex={relatedIndex} productId={props.productId} styles={styles} reviewData={reviewData} chosenProduct={props.chosenProduct}/>
            </Row>
          <CarouselContainer>
            {Boolean(relatedId.length > 4) ? <RelatedCarouselRight relatedIndex={relatedIndex} setRelatedIndex={setRelatedIndex} relatedProd={relatedProd}/> : null}
          </CarouselContainer>
    </RelatedItemsListContainer>
    </>
  )
}

export default RelatedItemsList;

// styled components
const RelatedItemsListContainer = styled.div`
  display: flex;
  flex-direction: row;
  border: 3px solid black;
  border-radius: 10px;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 1200px;
`

const CarouselContainer = styled.div`
  display: flex;
  place-content: center flex-end;
  width: 24px;
`;

