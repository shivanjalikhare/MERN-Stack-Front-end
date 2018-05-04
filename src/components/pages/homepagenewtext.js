import React, { Component } from 'react';
import { Image } from 'semantic-ui-react'

const divfont = {
  fontSize: '20px',
}


export default class homepagenewtext extends Component {



  render() {
    return (
      <div>
        <p style={divfont} > More from Us </p>
        <div className="ui three column very relaxed grid">
          <div className="column">
            <p style={divfont}>
              <b><Image  src='../assets/images/aboutus/shutterstock_201683003-730x488.jpg' /></b> <br />
              Events  <br />
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
              'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
            </p>
          </div>
          <div className="column">
            <p style={divfont}>
              <b><Image  src='../assets/images/aboutus/00411_agriculture-research.jpg' /></b> <br />
              Research  <br />
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
              'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
            </p>
          </div>
          <div className="column">
            <p style={divfont}>
              <b><Image  src='../assets/images/aboutus/agriculture-findings.jpg' /></b> <br />
              Research  <br />
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
              'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
            </p>
          </div>
        </div>
      </div>


    )
  }
}