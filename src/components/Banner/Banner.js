import React from 'react'
import { Carousel } from 'react-bootstrap'

const Banner = ({banner}) => {
  return (
      <Carousel>
          {banner.map((item, index)=>(
              <Carousel.Item>
                  <img src={item.image} alt={`${index} banner`} className="d-block w-100" />
                  <Carousel.Caption>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                      <p>{item.source}</p>
                  </Carousel.Caption>
                  </Carousel.Item>
          ))}

      </Carousel>

  )
}

export default Banner