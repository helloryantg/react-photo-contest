// React
import React from 'react';
// Styles
import './PhotoList.scss';
// Components
import Photo from '../Photo/Photo';

function PhotoList(props) {
  return (
    <div className="PhotoList">
      <Photo />
      <Photo />
      <Photo />
      <Photo />
      <Photo />
    </div>
  );
}

export default PhotoList;