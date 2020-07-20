// React
import React from 'react';
// Styles
import './Photo.scss';
// Dependencies
import { MdInsertPhoto } from 'react-icons/md';

function Photo(props) {
  return (
    <div className="Photo">
      <div className="item">
        <MdInsertPhoto />
      </div>
    </div>
  );
}

export default Photo;