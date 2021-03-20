import { render } from '@testing-library/react';
import React, {Component} from 'react';
import { Carousel} from 'react-bootstrap';

class Home extends Component
{
    render()
    {
    return(
        <React.Fragment>
        <h2>Welcome to Home Page</h2>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src="https://www.indusnet.co.in/site/wp-content/uploads/2015/12/banner-company-1-1024x443.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100 "
      src="https://www.mantratec.com/images/all-page-hader/Company-Profile.jpeg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.okayapower.com/img/inner-banner/group-company.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </React.Fragment>
    );
}
}

export default Home;