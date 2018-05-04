import React, { Component } from 'react'

import { Image } from 'semantic-ui-react'

const divfont = {
  fontSize: '20px',
  marginTop: '70px',
}

const div2 = {
  marginTop: '180px',
}

const div3 = {
  marginTop: '260px',
}

const div4 = {
  marginTop: '360px',
}

const div5 = {
  marginTop: '230px',
}

const div6 = {
  marginTop: '100px',
}
export default class AboutUsFooter extends Component {
  render() {
    return (
      <div>
        <div className="ui three column very relaxed grid">
          <div className="column">
            <p style={divfont}>
              <p className="ui block header" style={{fontSize: '17px', justifycontent: 'center', textalign: 'justify'}}><b>Using our Services</b> <br /></p>
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
              'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
            </p>
          </div>
          <div className="column">
            <p style={divfont}>
              <p style={div2}>
                <p className="ui block header" style={{fontSize: '17px', justifycontent: 'center', textalign: 'justify'}}><b>About Software in our Services</b> <br /></p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
                'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
              </p>
            </p>
          </div>
          <div className="column">
            <p style={divfont}>
              <p style={div3}>
                <p className="ui block header" style={{fontSize: '17px', justifycontent: 'center', textalign: 'justify'}}><b>Modifying and Terminating our Services</b> <br /></p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
                'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
              </p>
            </p>
          </div>
          <div className="column">
            <p style={divfont}>
              <p style={div4}>
                <p className="ui block header" style={{fontSize: '17px', justifycontent: 'center', textalign: 'justify'}}><b>Our Warranties and Disclaimers</b> <br /></p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
                'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
              </p>
            </p>
          </div>
          <div className="column">
            <p style={divfont}>
              <p style={div5}>
                <p className="ui block header" style={{fontSize: '17px', justifycontent: 'center', textalign: 'justify'}}><b>Liability for our Services</b> <br /></p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
                'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
              </p>
            </p>
          </div>
          <div className="column">
            <p style={divfont}>
              <p style={div6}>
                <p className="ui block header" style={{fontSize: '17px', justifycontent: 'center', textalign: 'justify'}}><b>Business uses of our Services</b> <br /></p>
                Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',<br />
                'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas<br />
              </p>
            </p>
          </div>
        </div>
      </div>


    )
  }
}