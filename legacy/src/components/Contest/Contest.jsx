import React from 'react';
import './Contest.css';

const Contest = (props) => (
    <div className="Contest">
        <button 
            className="contest_photo flexed_row_center"
            onClick={props.handleCreateContestClick} 
        >+</button>
    </div>
);

export default Contest;