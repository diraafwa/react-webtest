import React from 'react'
import {Carousel} from 'react-bootstrap'
import '../styles/Carousel.css'
const Carousell = () => {
    return (
<Carousel className="Carousel">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.tokodistributor.com/tokdis-banner/45184007c8e7aa8355c0c1a36e3ac0499e45e85830.jpg"
      alt="First slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.tokodistributor.com/tokdis-banner/90332d6f6f814067f8460bc4fea7aba9673378230.jpg"
      alt="Second slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.tokodistributor.com/tokdis-banner/578835bf9eff41ac5fb32fe15db8c4ce8f4b150435.jpg"
      alt="Third slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.tokodistributor.com/tokdis-banner/16673fae3877c3e9c3523510618586a666b2189458.jpg"
      alt="Four slide"
    />
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://assets.tokodistributor.com/tokdis-banner/64004490fd1c533bfe891a976d637286ce16e99413.jpg"
      alt="Five slide"
    />
  </Carousel.Item>

</Carousel>
    )
}

export default Carousell

