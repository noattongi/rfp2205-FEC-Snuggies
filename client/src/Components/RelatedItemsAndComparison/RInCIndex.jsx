import React, {useState} from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import RelatedItemsList from './RelatedItemsList.jsx';
import OutfitList from './OutfitList.jsx';

const RInCIndex = () => {
  return (
    <RelatedItemsList />
    <OutfitList />
  )
}