/* eslint-disable max-len */
import React from "react";
import MenuExampleInverted from "./navbar";
/*import AboutUsFooter from "./t&ccontent"; */
import FooterInverted from "./footer";
import MenuSecondExampleInverted from "./secondhomenavbar";
import AboutUsText from "./privacypolicytext";
import { Image } from 'semantic-ui-react';




const width = {
  fontSize: '50px',
  fontStyle: 'Calibri Light',
  marginTop: '201px',

}


export default class privacypolicy extends React.Component {

  render(){

    return (

      <div  >

        <MenuExampleInverted />
        <MenuSecondExampleInverted />



        <div style={width} >
          <Image src='../assets/images/privacypolicy/privacypolicy.jpg' style={{height: '200px', width: '400px', marginleft:"-20px"}} />

          <AboutUsText />

        </div>
        <FooterInverted/>




      </div>



    )
  }


}