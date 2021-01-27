import React from "react"
import utils from "../../lib/utils"
import Carousel from "react-bootstrap/carousel"

function Images({ sprites }){
  const images = utils.getAllValuesFrom(sprites)

  return(
    <Carousel indicators={ false }>
    {
      images.map((image, i) => {
        return (
          <Carousel.Item interval={2000} key={ i } >
            <img src={image[1]} alt={image[0]} />
          </Carousel.Item>
          )
      })
    }
    </Carousel>
  )
}

export default Images;
