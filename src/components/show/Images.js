import React, { useState } from "react"
import utils from "../../lib/utils"
import Carousel from "react-bootstrap/carousel"
import image from "../../assets/images/unknown.png"

function Images({ sprites }){
  const images = utils.getAllValuesFrom(sprites)
  const [ number, setNumber ] = useState(0)

  if(!images.length)
    images.push(["No image", image])

  return(
    <React.Fragment>
    <Carousel
      indicators={ false }
      controls={ images.length > 1 }
      onSlide={ (number, dir)=> setNumber(number) }
    >
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
    <div className="image_indicator">{ `${ images.length ? number+1 : 0 } / ${ images.length }` }</div>
    </React.Fragment>
  )
}

export default Images;
