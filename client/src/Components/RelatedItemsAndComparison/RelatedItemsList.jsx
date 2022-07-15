import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RelatedCards from './RelatedCards.jsx';
import RelatedCarousel from './RelatedCarousel.jsx';
import styled from 'styled-components';

const RelatedItemsList = (props) => {
  const [relatedId, setRelatedId] = useState([]);
  const [relatedProd, setRelatedProd] = useState([]);

  useEffect(() => {
    getRelated(40344)
    .then((data) => {
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
  }, []);

  const getRelated = (productId) => {
    return axios.get('/snuggie/products', {params: {product_id: productId + '/related'}})
    .then((response) => {
      setRelatedId(response.data);
      return response.data
    })
    .catch((error) => {
      console.log('Error in getRelated', error)
    })
  }
  return (
    <>
      <h3>Related List</h3>
        <Row>
          <RelatedCards relatedProd = {relatedProd}/>
          <CarouselContainer>
            {Boolean(relatedId.length > 4) ? <RelatedCarousel/> : null}
          </CarouselContainer>
        </Row>
    </>
  )
}

export default RelatedItemsList;

// styled components
const Row = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid black;
`

const CarouselContainer = styled.div`
  display: flex;
  place-content : center flex-end;
`;
