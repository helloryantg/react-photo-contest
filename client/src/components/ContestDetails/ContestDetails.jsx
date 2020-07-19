// React
import React from 'react';
// Styles
import './ContestDetails.scss';

function ContestDetails() {
  return (
    <div className="ContestDetails">
      <div className="end-date">Contest Ends: December 20, 2018</div>
      <div className="contest-name">Torres Clan</div>
      <div className="likes">Contest Likes: 3 likes</div>
      <div className="sign-up">Please Sign Up to Create Posts!</div>
      <div className="vote">Please vote for only one person per category below.</div>
    </div>
  );
}

export default ContestDetails;
