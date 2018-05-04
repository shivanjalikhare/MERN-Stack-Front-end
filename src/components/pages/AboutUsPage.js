/* eslint-disable max-len */
import React from "react";
import MenuExampleInverted from "./navbar";
import AboutUsText from "./aboutustext";
import AboutUsFooter from "./aboutusfooter";
import FooterInverted from "./footer";
import MenuSecondExampleInverted from "./secondhomenavbar";





const width = {
  fontSize: '50px',
  fontStyle: 'Calibri Light',
  marginTop: '201px',

}


export default class AboutUsPage extends React.Component {

  render(){

    return (

      <div  >

        <MenuExampleInverted />
        <MenuSecondExampleInverted />



        <div style={width} >
          <b style={{fontWeight:"bold", marginTop:"20px"}}></b>
          <AboutUsText />
          <AboutUsFooter />
        </div>
        <FooterInverted/>




      </div>



    )
  }


}