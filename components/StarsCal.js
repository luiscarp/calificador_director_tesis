import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const StarsCal = ({ rating, isEdit}) => {
  

  return (
    <ReactStars
      count={5}

      size={45}
      activeColor="#ffd700"
      value={rating}
      edit={isEdit}
      isHalf = {true}
    />
  );
};

export default StarsCal;
