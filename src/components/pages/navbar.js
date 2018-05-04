import React, { Component } from 'react'

import { Link } from "react-router-dom";
import { Image } from 'semantic-ui-react'


export default class MenuExampleInverted extends Component {
  render() {
    return (
      <div className='ui fixed main inverted menu'>
        <div className='ui container'>

          <a className="item">
            <Image src='../assets/images/contactus/logo.jpg' style={{height: '100px', width: '100px', marginleft:"-20px"}} />
          </a>

          <div className="ui inverted secondary pointing menu">

            <a className=" item">
              <Link to="/homepage">Home</Link>
            </a>
            <a  className='item' >
              <Link to="/aboutus">About us</Link>
            </a>
            <a  className='item' >
              <Link to="/trustees">Our Trustees</Link>
            </a>
            <a  className='item' >
              <Link to="/contactus">Contact Us</Link>
            </a>
            <a  className='item' >
              <Link to="/research">Our Research</Link>
            </a>
            <a  className='item' >
              <Link to="/management">Our Management</Link>
            </a>
          </div>

        </div>
      </div>
    )
  }
}
