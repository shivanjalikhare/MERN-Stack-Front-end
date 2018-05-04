import React, { Component } from 'react'




export default class FooterInverted extends Component {
  render() {
    return (

      <div className="ui inverted vertical footer segment" style={{marginLeft: '-200px' , width:'1522px'}}>
        <div className="ui center aligned container">
          <div className="ui stackable inverted divided grid">
            <div className="three wide column">
              <h4 className="ui inverted header">FAQs</h4>

            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Privacy & Policy</h4>

            </div>
            <div className="three wide column">
              <h4 className="ui inverted header">Terms & Condition</h4>
            </div>
            <div className="seven wide column">
              <h4 className="ui inverted header">Quick Links</h4>
              <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
            </div>
          </div>

          <div className="ui inverted section divider" />
          <img src="assets/images/logo.png" className="ui centered mini image" />
          <div className="ui horizontal inverted small divided link list">
            <a className="item" href="Faq">FAQ</a>
            <a className="item" href="#">Help</a>
            <a className="item" href="termsandconditions">Terms and Conditions</a>
            <a className="item" href="privacypolicy">Privacy Policy</a>
          </div>

        </div>
      </div>


    )
  }

}