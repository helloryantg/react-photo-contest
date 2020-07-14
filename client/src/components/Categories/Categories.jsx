// React
import React from 'react';
// Styles
import './Categories.scss';
// Settings
import { contestCategories } from '../../settings'

function Categories(props) {
  return (
    <div className="Categories">
      <div className="categories-list">
        {contestCategories.map(category => (
          <div className="category">{category}</div>
        ))}
      </div>
    </div>
  )
}

export default Categories;