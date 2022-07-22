import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {AM_InputContainer, AM_FormContainer, WriteTitle, AM_TopContainer, CloseButton, StyleBackground, Container, ModalBody, ProductName } from '../StyledComponents/AddReviewModal.jsx';
import StarRatingModal from '../../RatingsAndReviews/ReviewList/StarRatingReviewModal.jsx'
import {ImageContainer, ShrinkImg} from '../StyledComponents/ReviewTile.jsx'

var AddReviewModal = (props) => {
   console.log(props, 'hellooooo')
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
  const selectSize = {1: 'A size too small', 2: '½ a size too small', 3: 'Perfect' , 4 : '½ a size too big', 5: 'A size too wide'};
  const selectWidth = {1: 'Too narrow', 2: 'Slightly narrow', 3: 'Perfect' , 4 : 'Slightly wide', 5: 'Too wide'};
  const selectComfort = {1: 'Uncomfortable', 2: 'Slightly uncomfortable', 3: 'Ok' , 4 : 'Comfortable', 5: 'Perfect'};
  const selectQuality = {1: 'Poor', 2: 'Below average', 3: 'What I expected' , 4 : 'Pretty great', 5: 'Perfect'};
  const selectLength = {1: 'Runs Short', 2: 'Runs slightly short', 3: 'Perfect' , 4 : 'Runs slightly long', 5: 'Runs long'};
  const selectFit = {1: 'Runs tight', 2: 'Runs slightly tight', 3: 'Perfect' , 4 : 'Runs slightly long', 5: 'Runs long'};
  const [renderChar, setRenderChar] = useState({Size: '', Width: '', Comfort: '', Quality: '', Length: '', Fit: ''});




  var charSelectionChange = (characteristicName, ratingValue) => {
    if (characteristicName === 'Size') {
      setRenderChar({...renderChar, Size: selectSize[ratingValue]})
    } else if(characteristicName === 'Width') {
      setRenderChar({...renderChar, Width: selectWidth[ratingValue]})
    } else if(characteristicName === 'Comfort') {
      setRenderChar({...renderChar, Comfort: selectComfort[ratingValue]})
    } else if(characteristicName === 'Quality') {
      setRenderChar({...renderChar, Quality: selectQuality[ratingValue]})
    } else if(characteristicName === 'Length') {
      setRenderChar({...renderChar, Length: selectLength[ratingValue]})
    } else if(characteristicName === 'Fit') {
      setRenderChar({...renderChar, Fit: selectFit[ratingValue]})
    }
    // setRenderChar({...renderchar, [selected]: selected[]})
      // var charObj = select`${characteristicName}`
      // console.log(charObj)

  }

  var onCharChange = (event) => {
    var charName = event.target.getAttribute('name')
    var charValue = Number(event.target.value);
    var charId = props.metaData.characteristics[charName].id;
    setCharacteristics({...characteristics, [charId] : charValue})
    charSelectionChange(charName, charValue)
  }

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
    if((!isValidEmail(email) || recommendInput === null || reviewBody.length < 50  || nickname === '' || reviewBody.length < 50 || email === '' || characteristics === {}) ){
        alert("Please review the mandatory data!")
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
      <StyleBackground>
        <Container>
            <CloseButton onClick={props.closeModal}> X </CloseButton>
        <AM_FormContainer>
          <AM_TopContainer>
            <WriteTitle>Write Your Review</WriteTitle>
            <ProductName>About the {props.chosenProduct.name}</ProductName>
          </AM_TopContainer>
          <ModalBody>
            *Star Rating:<StarRatingModal onChange={changeRating}/>
            <div>
            <label>Do you recommend this product?
            <input type="radio" id='Yes' value="Yes" name="recommend" onChange={recommendOnChange}/> Yes
            <input  type="radio" id='Noo' value="No" name="recommend" onChange={recommendOnChange}/> No
            </label>
            </div>
            <div>
            {props.charData.Size && renderChar.Size === '' ? <span>None Selected</span>  : <span>{renderChar.Size}</span>}
            {props.metaData.Size &&
            <label>*Size
               <input type="radio" value="1" name="Size" onChange={onCharChange}/> 1
               <input type="radio" value="2" name="Size" onChange={onCharChange}/> 2
               <input type="radio" value="3" name="Size" onChange={onCharChange}/> 3
               <input type="radio" value="4" name="Size" onChange={onCharChange}/> 4
               <input type="radio" value="5" name="Size" onChange={onCharChange}/> 5
            </label>
              }
              </div>
              <div>
            {props.charData.Width && renderChar.Width === '' ? <span>None Selected</span> : <span>{renderChar.Width}</span>}
            {props.metaData.characteristics.Width &&
            <label>*Width
              <input type="radio" value="1" name="Width" onChange={onCharChange}/> 1
              <input type="radio" value="2" name="Width" onChange={onCharChange}/> 2
              <input type="radio" value="3" name="Width" onChange={onCharChange}/> 3
              <input type="radio" value="4" name="Width" onChange={onCharChange}/> 4
              <input type="radio" value="5" name="Width" onChange={onCharChange}/> 5
            </label>
              }
              </div>
              <div>
              {props.charData.Comfort && renderChar.Comfort === '' ? <span>None Selected</span> : <span>{renderChar.Comfort}</span>}
              {props.metaData.characteristics.Comfort &&
                <label>*Comfort
                  <input type="radio" value="1" name="Comfort" onChange={onCharChange}/> 1
                  <input type="radio" value="2" name="Comfort" onChange={onCharChange}/> 2
                  <input type="radio" value="3" name="Comfort" onChange={onCharChange}/> 3
                  <input type="radio" value="4" name="Comfort" onChange={onCharChange}/> 4
                  <input type="radio" value="5" name="Comfort" onChange={onCharChange}/> 5
                </label>
              }
              </div>
              <div>
              {props.charData.Quality && renderChar.Quality === '' ? <span>None Selected</span> : <span>{renderChar.Quality}</span>}
              {props.metaData.characteristics.Quality &&
                <label>*Quality
                    <input type="radio" value="1" name="Quality" onChange={onCharChange}/> 1
                    <input type="radio" value="2" name="Quality" onChange={onCharChange}/> 2
                    <input type="radio" value="3" name="Quality" onChange={onCharChange}/> 3
                    <input type="radio" value="4" name="Quality" onChange={onCharChange}/> 4
                    <input type="radio" value="5" name="Quality" onChange={onCharChange}/> 5
                </label>
              }
              </div>
              <div>
              {props.charData.Length && renderChar.Length === '' ? <span>None Selected</span>: <span>{renderChar.Length}</span>}
              {props.metaData.characteristics.Length &&
                <label>*Length
                    <input type="radio" value="1" name="Length" onChange={onCharChange}/> 1
                    <input type="radio" value="2" name="Length" onChange={onCharChange}/> 2
                    <input type="radio" value="3" name="Length" onChange={onCharChange}/> 3
                    <input type="radio" value="4" name="Length" onChange={onCharChange}/> 4
                    <input type="radio" value="5" name="Length" onChange={onCharChange}/> 5
                </label>
              }
              </div>
              <div>
              {props.charData.Fit  && renderChar.Fit === '' ? <span>None Selected</span> : <span>{renderChar.Fit}</span>}
              {/* {renderChar.Fit !== '' && <span>{renderChar.Fit}</span>} */}
              {props.metaData.characteristics.Fit &&
                <label>*Fit
                    <input type="radio" value="1" name="Fit" onChange={onCharChange}/> 1
                    <input type="radio" value="2" name="Fit" onChange={onCharChange}/> 2
                    <input type="radio" value="3" name="Fit" onChange={onCharChange}/> 3
                    <input type="radio" value="4" name="Fit" onChange={onCharChange}/> 4
                    <input type="radio" value="5" name="Fit" onChange={onCharChange}/> 5
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
                {charCountBody > 0 ? <span>Minimum required characters left: [{charCountBody}]</span> : <span>Minimum reached</span>}
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
                <input  required type="email" name="email" id="email" placeholder="Example: jackson11@email.com" value={email} maxLength = "60" onChange={handleEmailChange}/>
              </label>
            </form>
            For authentication reasons, you will not be emailed
          </ModalBody>
          <div>
            <button onClick={onSubmitClick} >Submit</button>
          </div>
          </AM_FormContainer>
        </Container>
      </StyleBackground>
    )
}

export default AddReviewModal;

{/* <div>
{props.Size && renderChar.Size === '' && <span>None Selected size</span>}
{renderChar.Size && renderChar.Size !== '' && <span>{renderChar.Size}</span>}
{props.metaData.Size &&
<label>*Size
   <input type="radio" value="1" name="Size" onChange={onCharChange}/> 1
   <input type="radio" value="2" name="Size" onChange={onCharChange}/> 2
   <input type="radio" value="3" name="Size" onChange={onCharChange}/> 3
   <input type="radio" value="4" name="Size" onChange={onCharChange}/> 4
   <input type="radio" value="5" name="Size" onChange={onCharChange}/> 5
</label>
  }
  </div>
  <div>
{renderChar.Width && renderChar.Width === '' && <span>None Selected width</span>}
{renderChar.Width !== '' && <span>{renderChar.Width}</span>}
{props.metaData.characteristics.Width &&
<label>*Width
  <input type="radio" value="1" name="Width" onChange={onCharChange}/> 1
  <input type="radio" value="2" name="Width" onChange={onCharChange}/> 2
  <input type="radio" value="3" name="Width" onChange={onCharChange}/> 3
  <input type="radio" value="4" name="Width" onChange={onCharChange}/> 4
  <input type="radio" value="5" name="Width" onChange={onCharChange}/> 5
</label>
  }
  </div>
  <div>
  {renderChar.Comfort && renderChar.Comfort === '' && <span>None Selected comfort</span>}
  {renderChar.Comfort && renderChar.Comfort !== '' && <span>{renderChar.Comfort}</span>}
  {props.metaData.characteristics.Comfort &&
    <label>*Comfort
      <input type="radio" value="1" name="Comfort" onChange={onCharChange}/> 1
      <input type="radio" value="2" name="Comfort" onChange={onCharChange}/> 2
      <input type="radio" value="3" name="Comfort" onChange={onCharChange}/> 3
      <input type="radio" value="4" name="Comfort" onChange={onCharChange}/> 4
      <input type="radio" value="5" name="Comfort" onChange={onCharChange}/> 5
    </label>
  }
  </div>
  <div>
  {renderChar.Quality === '' && <span>None Selected quality</span>}
  {renderChar.Quality !== '' && <span>{renderChar.Quality}</span>}
  {props.metaData.characteristics.Quality &&
    <label>*Quality
        <input type="radio" value="1" name="Quality" onChange={onCharChange}/> 1
        <input type="radio" value="2" name="Quality" onChange={onCharChange}/> 2
        <input type="radio" value="3" name="Quality" onChange={onCharChange}/> 3
        <input type="radio" value="4" name="Quality" onChange={onCharChange}/> 4
        <input type="radio" value="5" name="Quality" onChange={onCharChange}/> 5
    </label>
  }
  </div>
  <div>
  {renderChar.Length === '' && <span>None Selected length</span>}
  {renderChar.Length !== '' && <span>{renderChar.Length}</span>}
  {props.metaData.characteristics.Length &&
    <label>*Length
        <input type="radio" value="1" name="Length" onChange={onCharChange}/> 1
        <input type="radio" value="2" name="Length" onChange={onCharChange}/> 2
        <input type="radio" value="3" name="Length" onChange={onCharChange}/> 3
        <input type="radio" value="4" name="Length" onChange={onCharChange}/> 4
        <input type="radio" value="5" name="Length" onChange={onCharChange}/> 5
    </label>
  }
  </div>
  <div>
  {renderChar.Fit === '' && <span>None Selected fit</span>}
  {renderChar.Fit !== '' && <span>{renderChar.Fit}</span>}
  {props.metaData.characteristics.Fit &&
    <label>*Fit
        <input type="radio" value="1" name="Fit" onChange={onCharChange}/> 1
        <input type="radio" value="2" name="Fit" onChange={onCharChange}/> 2
        <input type="radio" value="3" name="Fit" onChange={onCharChange}/> 3
        <input type="radio" value="4" name="Fit" onChange={onCharChange}/> 4
        <input type="radio" value="5" name="Fit" onChange={onCharChange}/> 5
    </label>
  }
  </div> */}