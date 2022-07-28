import React from 'react'
import Offer from './Offer'
import "./Offers.css"

const Offers = ({offers}) => {
  return (
    <div className="offerSection">
        {offers.map((item, index)=>(
            <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
        </div>
  )
}

export default Offers