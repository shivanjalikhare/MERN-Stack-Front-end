/* eslint-disable max-len */
import React from "react";
import MenuExampleInverted from "./navbar";
import AboutUsFooter from "./t&ccontent";
import FooterInverted from "./footer";
import MenuSecondExampleInverted from "./secondhomenavbar";
import { Image } from 'semantic-ui-react';




const width = {
  fontSize: '50px',
  fontStyle: 'Calibri Light',
  marginTop: '201px',

}


export default class termsandconditions extends React.Component {

  render(){

    return (

      <div  >

        <MenuExampleInverted />
        <MenuSecondExampleInverted />



        <div style={width} >
          <Image src='../assets/images/termsandconditions/t&c.jpg' style={{height: '220px', width: '400px', marginleft:"-20px"}} />
          <AboutUsFooter />

        </div>
        <FooterInverted/>




      </div>



    )
  }


}