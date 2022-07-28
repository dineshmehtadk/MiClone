import React from 'react'
import "./ProductReviews.css"
const ProductReviewCard = ({image, index, review, price, name}) => {
  return (
    <div className="productReviewCard">
        <img src={image} alt={`${index} Reviews`} />
        <h5>{review}</h5>
        <span>{name}</span>
        <b>{price}</b>
    </div>
  )
}

export default ProductReviewCard