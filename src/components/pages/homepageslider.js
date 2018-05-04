import React, { Component } from 'react';
/* import ReactDOM from 'react-dom'; */
import { Carousel } from 'react-responsive-carousel';
import './carousel.min.css';

export default class DemoCarousel extends Component {
  render() {
    return (

      <Carousel style={{marginTop: "140px", marginLeft:"10px"}} >
        <div>
          <img src="../assets/images/slider/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../assets/images/slider/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../assets/images/slider/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img src="../assets/images/slider/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="../assets/images/slider/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="../assets/images/slider/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>

    );
  }
}

