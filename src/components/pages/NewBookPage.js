/* eslint-disable max-len */
import React from "react";
import MenuExampleInverted from "./navbar";

import FooterInverted from "./footer";
import DemoCarousel from "./homepageslider";
import MenuSecondExampleInverted from "./secondhomenavbar";
import homepagenewtext from "./homepagenewtext";
import AboutUsText from "./aboutustext";


const width = {
  fontSize: '50px',
  fontStyle: 'Calibri Light',
  marginTop: '101px',
  fontWeight: 'bold'
}


export default class homepagenew extends React.Component {

  render(){

    return (

      <div  >

        <MenuExampleInverted />
        <MenuSecondExampleInverted />


        <div style={width} >
          <div style={{marginLeft:"-280px", width:"1690px"}} >
            <DemoCarousel />
          </div>
          <AboutUsText />
        </div>

        <homepagenewtext />
        <FooterInverted/>




      </div>



    )
  }


}