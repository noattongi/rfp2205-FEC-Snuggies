import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { StyleBackground, Container, ModalBody, ProductName } from '../StyledComponents/AddReviewModal.jsx';
import StarRatingModal from '../../RatingsAndReviews/ReviewList/StarRatingReviewModal.jsx'
import {ImageContainer, ShrinkImg} from '../StyledComponents/ReviewTile.jsx'

var AddReviewModal = (props) => {
  //  console.log(props, 'hellooooo')
  const [isOpen, setIsOpen] = useState(false);
  const [bodySummary, setbodySummary] =  useState('');
  const [reviewBody, setReviewBody] =  useState('');
  const [nickname, setNickname] =  useState('');
  const [email, setEmail] =  useState('');
  const [selectedImage, setSelectedImage] = useState(['']);
  const [recommendInput, setRecommendInput] = useState(null);
  const [charCountSummary, setCharCountSummary] = useState(0);
  const [charCountBody, setCharCountBody] = useState(50);
  const [postedImage, setPostedImage] = useState('');
  const [rating, setRating] = useState(null);
  const [characteristics, setCharacteristics] = useState({});
  const [productName, setProductName] = useState('');
  const [productID, setProductID] = useState(0);
  const [photoURL, setPhotoURL] = useState([]);
  const comfortID = props.metaData.characteristics.Comfort.id


  var toggleModal = (e) => {
    setIsOpen(!isOpen);
  }

  var handleStarClick = (event, key) => {
    setAverageRating(key);
  }

  var handleEmailChange = (event) => {
    setEmail(event.target.value);
  }

  var handleNicknameChange = (event) => {
    setNickname(event.target.value);
  }

  var handleReviewBodyChange =(event) => {
    setReviewBody(event.target.value);
    setCharCountBody(50 - event.target.value.length);
  }

  var handleSummaryChange = (event) => {
    setbodySummary(event.target.value);
    setCharCountSummary(event.target.value.length);
  }

  var isValidEmail = (email) => {
   return  /\S+@\S+\.\S+/.test(email);
  }

  var onImageChange = event => {
    console.log(event.target.files[0]);
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      setPostedImage(img.name);
      setSelectedImage(URL.createObjectURL(img));
    }
  };

  var recommendOnChange = (event) => {
    if(event.target.value === 'Yes') {
      return setRecommendInput(true);
    } else if(event.target.value === 'No') {
      return setRecommendInput(false);
    }
  }

  var sizeOnChange = (event) => {
      var sizeNum = Number(event.target.value);
      var sizeId = props.metaData.characteristics.Size.id
      setCharacteristics({...characteristics, sizeId : sizeNum});
  }

  var widthOnChange = (event) => {
    var widthNum = Number(event.target.value);
    var widthId = props.metaData.characteristics.Width.id
    setCharacteristics({...characteristics, [widthId] : widthNum});
  }

  var comfortOnChange = (event) => {
    var comfortNum = Number(event.target.value);
    var comfortId = props.metaData.characteristics.Comfort.id
    setCharacteristics({...characteristics, [comfortId] : comfortNum});
  }

  var qualityOnChange = (event) => {
    var qualityNum = Number(event.target.value);
    var qualityId = props.metaData.characteristics.Quality.id
    setCharacteristics({...characteristics, [qualityId] : qualityNum});
  }

  var lengthOnChange = (event) => {
    var lengthNum = Number(event.target.value);
    var lengthId = props.metaData.characteristics.Length.id
    setCharacteristics({...characteristics, [lengthId] : lengthNum});
  }

  var fitOnChange = (event) => {
    var fitNum = Number(event.target.value);
    var fitId = props.metaData.characteristics.Fit.id
    setCharacteristics({...characteristics, [fitId] : fitNum});
  }

  var resetSubmitValues = () => {
    setbodySummary('');
    setReviewBody('');
    setNickname('');
    setEmail('');
    setSelectedImage(['']);
    setRecommendInput(null);
    setCharCountSummary(0);
    setCharCountBody(50);
    setPostedImage('');
    setIsOpen(!isOpen);
    setCharacteristics({});
    props.closeModal();
    setRating(null)
  }

  var onSubmitClick = (event) => {
    console.log(recommendInput, reviewBody, nickname, email, reviewBody.length, characteristics)
    if((!isValidEmail(email)) ){
      return alert('Please enter a valid email!')
      if( recommendInput === null || reviewBody === ''  || nickname === '' || reviewBody.length < 50 || email === '') {//add characteristics, images are invalid or unable to be uploaded , email address is not in the correct format, ratings
        alert("Please review the mandatory data!")
      }
    } else {
      console.log(photoURL, productID, rating, bodySummary, bodySummary, bodySummary, bodySummary, reviewBody, recommendInput, nickname, email, characteristics)
      props.postReview({
      product_id: productID,//hardcoded
      rating: rating,//hardcoded
      summary: bodySummary,
      body: reviewBody,
      recommend: recommendInput,
      name: nickname,
      email: email,
      photos: photoURL,
      characteristics: characteristics
    })
    resetSubmitValues();
    }
  }

  useEffect(() => {
    setProductName(props.chosenProduct.name);
    setProductID(props.chosenProduct.id);
  },[productName, productID]);

  var changeRating = (rating) => {
    setRating(rating)
    console.log(rating)
  }


  var array = [];

  var widget = window.cloudinary.createUploadWidget({
    cloudName: 'dp73xsqh9',
    uploadPreset: 'FECPRESET'
  }, (error, result) => {
    if (!error && result && result.event === 'success') {
      console.log('data', result.info.url)
      array.push(result.info.url);
      setPhotoURL(array)
      // setURLImage([...urlImage, result.info.url])
      console.log('what is photoURL', photoURL)
    }
  });

  var openPhotoUpload = () => {
    widget.open()
  };

    return (
      <StyleBackground> <div>
        <Container><div>
          <div>
            <button onClick={props.closeModal}> X </button>
          </div>
          <div>
            <ProductName><h1>Write Your Review</h1></ProductName>
            <h4>About the {props.chosenProduct.name}</h4>
          </div>
          <ModalBody><div>
            *Star Rating:<StarRatingModal onChange={changeRating}/>
            <div>
            <label>Do you recommend this product?
            <input type="radio" id='Yess' value="Yes" name="recommend" onChange={recommendOnChange}/> Yes
            <input  type="radio" id='Noo' value="No" name="recommend" onChange={recommendOnChange}/> No
            </label>
            </div>
            <div>
            {props.metaData.Size &&
            <label>*Size
               <input type="radio" value="1" name="Size" onChange={sizeOnChange}/> A size too small
               <input type="radio" value="2" name="Size" onChange={sizeOnChange}/> ½ a size too small
               <input type="radio" value="3" name="Size" onChange={sizeOnChange}/> Perfect
               <input type="radio" value="4" name="Size" onChange={sizeOnChange}/> ½ a size too big
               <input type="radio" value="5" name="Size" onChange={sizeOnChange}/> A size too wide
            </label>
              }
              </div>
              <div>
            {props.metaData.characteristics.Width &&
            <label>*Width
              <input type="radio" value="1" name="Width" onChange={widthOnChange}/> Too narrow
              <input type="radio" value="2" name="Width" onChange={widthOnChange}/> Slightly narrow
              <input type="radio" value="3" name="Width" onChange={widthOnChange}/> Perfect
              <input type="radio" value="4" name="Width" onChange={widthOnChange}/> Slightly wide
              <input type="radio" value="5" name="Width" onChange={widthOnChange}/> Too wide
            </label>
              }
              </div>
              <div>
              {props.metaData.characteristics.Comfort &&
                <label>*Comfort{characteristics[comfortID] && <span>{value}</span>}
                  <input type="radio" value="1" name="Comfort" onChange={comfortOnChange}/> Uncomfortable
                  <input type="radio" value="2" name="Comfort" onChange={comfortOnChange}/> Slightly uncomfortable
                  <input type="radio" value="3" name="Comfort" onChange={comfortOnChange}/> Ok
                  <input type="radio" value="4" name="Comfort" onChange={comfortOnChange}/> Comfortable
                  <input type="radio" value="5" name="Comfort" onChange={comfortOnChange}/> Perfect
                </label>
              }
              </div>
              <div>
              {props.metaData.characteristics.Quality &&
                <label>*Quality
                    <input type="radio" value="1" name="Quality" onChange={qualityOnChange}/> Poor
                    <input type="radio" value="2" name="Quality" onChange={qualityOnChange}/> Below average
                    <input type="radio" value="3" name="Quality" onChange={qualityOnChange}/> What I expected
                    <input type="radio" value="4" name="Quality" onChange={qualityOnChange}/> Pretty great
                    <input type="radio" value="5" name="Quality" onChange={qualityOnChange}/> Perfect
                </label>
              }
              </div>
              <div>
              {props.metaData.characteristics.Quality &&
                <label>*Length
                    <input type="radio" value="1" name="Length" onChange={lengthOnChange}/> Runs Short
                    <input type="radio" value="2" name="Length" onChange={lengthOnChange}/> Runs slightly short
                    <input type="radio" value="3" name="Length" onChange={lengthOnChange}/> Perfect
                    <input type="radio" value="4" name="Length" onChange={lengthOnChange}/> Runs slightly long
                    <input type="radio" value="5" name="Length" onChange={lengthOnChange}/> Runs long
                </label>
              }
              </div>
              <div>
              {props.metaData.characteristics.Fit &&
                <label>*Fit{}
                    <input type="radio" value="1" name="Fit" onChange={fitOnChange}/> Runs tight
                    <input type="radio" value="2" name="Fit" onChange={fitOnChange}/> Runs slightly tight
                    <input type="radio" value="3" name="Fit" onChange={fitOnChange}/> Perfect
                    <input type="radio" value="4" name="Fit" onChange={fitOnChange}/> Runs slightly long
                    <input type="radio" value="5" name="Fit" onChange={fitOnChange}/> Runs long
                </label>
              }
              </div>
            <form >
              <label>Review Summary:
                <input type="text" placeholder="Example: Best purchase ever!" value={bodySummary} maxLength = "60" onChange={handleSummaryChange}/>
                {charCountSummary}/60
                </label>
            </form><form >
              <label>*Review Body:
                <input type="text" placeholder="Why did you like the product or not?" value={reviewBody} maxLength = "1000" onChange={handleReviewBodyChange}/>
                {charCountBody > 0 ? <span>required characters left: [{charCountBody}]</span> : <span>Minimum reached</span>}
              </label>
            </form>
            <label>Upload Image:
              <button onClick={openPhotoUpload} > Upload Cloud</button>
              {/* <input type="file" name="myImage" onChange={onImageChange} />
               <ImageContainer><ShrinkImg src={selectedImage} /></ImageContainer> */}
            </label>
            <div>
            {photoURL &&
                photoURL.map((each, i) => {
                  return (
                     <ShrinkImg key={i} src={each} />
                  )
                })
              }
              </div>
            <form >
              <label>*Nickname:
                <input type="text" placeholder="Example: jackson11!" value={nickname} maxLength = "60" onChange={handleNicknameChange}/>
              </label>
            </form>
            For privacy reasons, do not use your full name or email address
            <form >
              <label>*Email:
                <input type="email" name="email" id="email" placeholder="Example: jackson11@email.com" value={email} maxLength = "60" onChange={handleEmailChange}/>
              </label>
            </form>
            For authentication reasons, you will not be emailed
          </div></ModalBody>
          <div>
            <button onClick={onSubmitClick} >Submit</button>
          </div>
        </div></Container>
      </div>/></StyleBackground>
    )
}

export default AddReviewModal;

