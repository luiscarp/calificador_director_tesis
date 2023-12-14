import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

const StarsCal = ({setRating, rating}) => {

    

    const ratingChanged = (newRating) => {
  
      setRating(newRating);
      // Aquí puedes agregar lógica adicional, como enviar el valor a un backend
    };
  
  

  return (
    <ReactStars
      count={5}
      onChange={ratingChanged}
      size={45}
      activeColor="#ffd700"
      value={rating}
      edit={true}
      isHalf = {false}
    />
  );
};

export default StarsCal;
