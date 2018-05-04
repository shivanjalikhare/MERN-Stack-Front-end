import React, { Component } from 'react'


export default class AboutUsFooter extends Component {

  render() {
    return (
      <div>

        <p style={{fontStyle:'Myriad pro Semibold'}} > MORE FROM US </p>

        <div className="ui divider"></div>
        <img className="big ui test image" src="../assets/images/aboutus/Upcoming-Events-Church-Service-Still-640x200.jpg" /> <br />
        <div style={{marginLeft:'257px'}}className="ui blue test button" >Events</div>
        <div className="ui divider" style={{marginRight: '0px'}}></div>
        <img className="medium ui  test image" src="../assets/images/aboutus/research-information-system.jpg" style={{width:'618px',height:'179px', marginLeft:'572px'}} /> <br />
        <div style={{marginLeft:'790px'}} className="ui green test button"  >Agricultural Research</div>
        <div className="ui divider"></div>
        <img className="big ui image" src="../assets/images/aboutus/projects.jpg" /> <br />
        <div style={{marginLeft:'257px'}}className="ui red test button" >Projects</div>
      </div>
    )
  }
}