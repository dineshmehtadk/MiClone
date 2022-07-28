import React from 'react'
import ProductReviewCard from './ProductReviewCard'

const ProductReviews = ({productReviews}) => {
  return (
    <div className="productReviews">
        {productReviews && productReviews.map((item, index)=>(
            <ProductReviewCard key={item.image} price={item.price}
            image={item.image} review={item.review} index={index} name={item.name} />
        ))}
    </div>
  )
}

export default ProductReviews