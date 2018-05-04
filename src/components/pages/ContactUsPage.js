import React from "react";
import ContactDetails from "./contactdetails";
import MenuExampleInverted from "./navbar";
import FooterInverted from "./footer";
import MenuSecondExampleInverted from "./secondhomenavbar";


export default class ContactUsPage extends React.Component {
  render() {

    return (
      <div>
        <MenuExampleInverted />
        <MenuSecondExampleInverted />


        <ContactDetails />

        <FooterInverted/>
      </div>

    )

  }
}

