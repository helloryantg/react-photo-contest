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
    </div>
  );
}

export default PhotoList;