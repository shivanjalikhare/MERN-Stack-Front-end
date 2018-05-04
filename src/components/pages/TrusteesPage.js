import React from 'react'
import { Image } from 'semantic-ui-react'
import MenuExampleInverted from "./navbar";
import FooterInverted from "./footer";
import MenuSecondExampleInverted from "./secondhomenavbar";

const spacesecondrow = {
  marginLeft: '120px',
}

const spacethirdrow = {
  marginLeft: '230px',
}


const ImageSize = {
  height: '215px',
  width: '182px'
}
export default class TrusteesPage extends React.Component {
  render() {

    return (
      <div>
        <MenuExampleInverted />
        <MenuSecondExampleInverted />

        <div className="ui five column very relaxed grid" style={{marginTop:'50px'}}>
          <div className="centered row">
            <p style={{fontWeight:"bold", fontSize:"xx-large"}}>
              Our Trustees
            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/hrishikesh_m2.jpg' /></b> <br />

              Mr. Hrishikesh A. Mafatlal <br />
              Chairman  <br />
              <a href='http://www.baif.org.in/pdf/Hrishikesh_Mafatlal.pdf'> View Profile</a><br />

            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/Swaminathan2.jpg' style={ImageSize}/></b> <br />
              Dr. M.S. Swaminathan <br />
              Vice Chairman  <br />
              <a href='http://www.baif.org.in/pdf/m_s_swaminathan.pdf'> View Profile</a><br />
            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/hasmukh.jpg' style={ImageSize} /></b> <br />
              Mr.Hasmukh S. Shah <br />
              Chairman, Executive Committee of BAIF Trustees  <br />
              <a href='http://www.baif.org.in/pdf/Hasmukh.pdf'> View Profile</a><br />
            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/Smt._Rajashree_Birla.jpg' style={ImageSize} /></b> <br />
              Smt. Rajashree A. Birla <br />
              Trustee  <br />
              <a href='http://www.baif.org.in/pdf/Rajashree_Birla.pdf'> View Profile</a><br />
            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/KishoreKumar.jpg' style={ImageSize} /></b> <br />
              Mr. Kishor A. Chaukar <br />
              Trustee  <br />
              <a href='http://www.baif.org.in/pdf/kishore_chaukar.pdf'> View Profile</a><br />
            </p>
          </div>
        </div>
        <div className="ui five column very relaxed grid">
          <div className="column" style={spacesecondrow}>
            <p >
              <b><Image  src='../assets/images/trustees/Sunil.jpeg' style={ImageSize} /></b> <br />
              Mr. Sunil S. Lalbhai <br />
              Trustee  <br />
              <a href='http://www.baif.org.in/pdf/Sunil_Lalbhai.pdf'> View Profile</a><br />

            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/DrDevendra.jpg' style={ImageSize} /></b> <br />
              Dr. Devendra R. Mehta <br />
              Trustee  <br />
              <a href='http://www.baif.org.in/pdf/Dr_Mehta_baif.pdf'> View Profile</a><br />
            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/deepak_mehta_photo.jpg' style={ImageSize} /></b> <br />
              Mr. Deepak C. Mehta <br />
              Trustee  <br />
              <a href='http://www.baif.org.in/pdf/deepak_mehta.pdf'> View Profile</a><br />
            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/pratap_pawar.jpg' style={ImageSize} /></b> <br />
              Mr. Pratap G. Pawar <br />
              Trustee  <br />
              <a href='http://www.baif.org.in/pdf/pratap_pawar.pdf'> View Profile</a><br />
            </p>
          </div>

        </div>
        <div className="ui five column very relaxed grid">
          <div className="column" style={spacethirdrow}>
            <p >
              <b><Image  src='../assets/images/trustees/Upasani.jpg' style={ImageSize} /></b> <br />

              Mr. Sharad Upasani <br />
              Trustee  <br />
              <a href='http://www.baif.org.in/pdf/Sharad_upasani.pdf'> View Profile</a><br />

            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/narayan_hegde.jpg' style={ImageSize} /></b> <br />
              Dr. Narayan G. Hegde <br />
              Trustee  <br />
              <a href='http://www.baif.org.in/pdf/dr-n-g-hegde.pdf'> View Profile</a><br />
            </p>
          </div>
          <div className="column">
            <p >
              <b><Image  src='../assets/images/trustees/girish_sohani.jpg' style={ImageSize} /></b> <br />
              Mr. Hrishikesh A. Mafatlal <br />
              President and Managing Trustee  <br />
              <a href='http://www.baif.org.in/pdf/Mr_GG_Sohani.pdf'> View Profile</a><br />
            </p>
          </div>
        </div>

        <FooterInverted />


      </div>



    )
  }
}

