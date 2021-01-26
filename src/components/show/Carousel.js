import React from "react"
import utils from "../../lib/utils"
import Carousel from "react-bootstrap/carousel"

function Images({ sprites }){
  const images = utils.getAllValuesFrom(sprites)

  return(
    <Carousel>
    {
      images.map((image, i) => {
        return (
          <Carousel.Item interval={2000} >
            <img src={image[1]} alt={image[0]} key={ i } />
          </Carousel.Item>
          )
      })
    }
    </Carousel>
  )
}

export default Images;
