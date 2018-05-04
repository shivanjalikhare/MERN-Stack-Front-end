import React, { Component } from 'react'

import { Link } from "react-router-dom";
/* import { Image } from 'semantic-ui-react' */


export default class MenuSecondExampleInverted extends Component {
  render() {
    return (
      <div className='ui fixed main menu' style={{marginTop: "125px", color: "black"}}>
        <div className='ui container'>
          <div className="ui inverted secondary pointing menu" style={{marginLeft: "-250px"}}>
            <a className="item">
              <Link to="/"  style={{color: "black"}}>WORK OF THE DAY</Link>

            </a>
            <a  className='item' >
              <Link to="/"  style={{color: "black"}}>SKILLS IN DEMAND</Link>
            </a>
            <a  className='item' >
              <Link to="/"  style={{color: "black"}}>OUR WORK PROGRESS</Link>
            </a>
            <a  className='item' >
              <Link to="/"  style={{color: "black"}}>LATEST STORIES</Link>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
