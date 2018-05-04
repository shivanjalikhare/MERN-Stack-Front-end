import React from "react";
import { Image } from 'semantic-ui-react'


const bold = {
  fontWeight: "bold",
}
const click ={
  marginTop: "6px",
  marginLeft: "58px",
}


export default class ContactDetails extends React.Component {
  render() {

    return (

      <div className="ui three column very relaxed grid">
        <Image src='../assets/images/contactus/contact-us-icon.jpg' style={{height: '344px', width: '1078px',}} />
        <div className="column">
          <Image src='../assets/images/contactus/map-img-thum.jpg' style={{height: '297px', width: '297px',}} href="http://www.baif.org.in/pdf/Programme-Coverage.pdf"/>
          <div className="row" style={click}>
            <p><a href="http://www.baif.org.in/pdf/Programme-Coverage.pdf"> Click Here</a></p></div>
        </div>
        <div className="column">
          <p>
            <b style={bold}>  <a href="#" >BAIF Development Research Foundation</a> </b> <br />
            BAIF Bhavan, Dr. Manibhai Desai Nagar  <br />
            Warje, Pune 411058, India<br />
            <b style={bold}>Phone : </b> 91-20-25231661 / 64700175<br />
            <b style={bold}>Fax: </b> 91-20-25231662 <br />
            <b style={bold}>Email: </b> baif@baif.org.in <br />
          </p>
          <p>
            <b style={bold}>  <a href="#" >BAIF Development Research Foundation</a> </b> <br />
            E-1, First Floor, DDA Market,  <br />
            MOR land, New Rajendra Nagar, <br />
            New Delhi 110 060 <br />
            <b style={bold}>Phone : </b> 011-28741031 / 28741032<br />
            <b style={bold}>Fax: </b> 011-28741036 <br />
            <b style={bold}>Email: </b> baif@bol.net.in <br />
          </p>
          <p>
            <b style={bold}>  <a href="#" >BAIF Central Research Station</a> </b> <br />
            Urulikanchan, Pune 412 202  <br />
            <b style={bold}>Phone : </b> 020-26926248<br />
            <b style={bold}>Fax: </b> 26926347 <br />
            <b style={bold}>Email: </b> crsbaif@baif.org.in <br />
          </p>
          <p>
            <b style={bold}>  <a href="#" >BAIF Semen Freezing Laboratory</a> </b> <br />
            Dharouli, Jind,  <br />
            Haryana 126 113 <br />
            <b style={bold}>Phone : </b> 	01686-268563<br />
            <b style={bold}>Fax: </b> 	01686-268563 <br />
            <b style={bold}>Email: </b> 	baifjind@gmail.com <br />
          </p>
        </div>
        <div className="column">
          <p>
            <b style={bold}>  <a href="http://www.baif.org.in/pdf/Baif-training-facilities-rate-card-2016-17-external.pdf" >BAIF Facilities</a> </b>
          </p>



        </div>
        <div className="centered row">
          <p style={{fontWeight:"bold", fontSize:"x-large"}}>
            Our Associate Organisations
          </p>
        </div>
        <div className="row">
          <div className="column">
            <p>
              <b style={bold}>  <a href="#" >BAIF Institute for Sustainable Livelihoods and Development (BISLD)</a> </b> <br />
              NH 4, Dr. Manibhai Desai Nagar,   <br />
              Warje, Pune 411058 <br />
              <b style={bold}>Phone : </b> 	91-20-25231661-8<br />
              <b style={bold}>Fax: </b> 	91-20-25231662 <br />
              <b style={bold}>Email: </b> 	bisld@baif.org.in <br />
              <b style={bold}>Website: </b> 	www.bisld.org.in <br />
            </p>
          </div>
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BAIF_Orissa.pdf" >BAIF Odisha</a> </b> <br />
              "Kalyani" Gandhi Colony,   <br />
              Sarlakani, Post Dhankauda, <br />
              Via Remed, Sambalpur 768 006 <br />
              Odisha <br />
              <b style={bold}>Fax: </b> 	0663-2410276, <br />
              <b style={bold}>Email: </b> 	birdorissa@gmail.com <br />
            </p>
          </div>
          <div className="column">
            <p >
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BAIF_Punjab.pdf" >BAIF Punjab</a> </b> <br />
              705 B Ghummen Nagar,    <br />
              Alipur Road, Gali No. 7, <br />
              Near Primrose Public School, <br />
              Patiala 147 001, Punjab <br />
              <b style={bold}>Email: </b> 		baifpunjab@gmail.com <br />
            </p>
          </div>
          <div className="ui fitted divider" />

        </div>
        <div className="row">
          <div className="column">

            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/maharashtra_institute.pdf" >Maharashtra Institute of Technology Transfer for
                Rural Areas (MITTRA)</a> </b> <br />
              BAIF-MITTRA Bhavan, <br />
              Opp. Nivas Homes, Behind Bodhale Nagar,  <br />
              Nasik-Pune Highway, Nasik 422 011,  <br />
              Maharashtra <br />
              <b style={bold}>Phone : </b> 	0253-2416057 / 2416058<br />
              <b style={bold}>Fax: </b> 		0253-2416056 <br />
              <b style={bold}>Email: </b> 	mittransk@gmail.com<br />
              <b style={bold}>Website: </b> 	www.mittra.org <br />
            </p>
          </div>
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/maharashtra_institute.pdf" >BAIF Chhattisgarh</a> </b> <br />
              147, "Akanksha", Anand Nagar,   <br />
              Near Durga Mandir, <br />
              Raipur 492 009 Chattisgarh <br />

              <b style={bold}>Phone: </b> 	0771-4074750<br />
              <b style={bold}>Email: </b> 		baif_cg@yahoo.com <br />
            </p>
          </div>
          <div className="ui fitted divider" />
        </div>
        <div className="row">
          <div className="column">

            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/Gujarat_Rural_Institute.pdf" >Gujarat Rural Institute for Socio-Economic
                Reconstruction, Vadodara (GRISERV)</a> </b> <br />
              3rd Floor, Indra Complex, <br />
              Near Amarjyot Society,  <br />
              Manjalpur, Vadodara 390 004, Gujarat <br />
              <b style={bold}>Phone : </b> 	0265-2654897,<br />
              <b style={bold}>Fax: </b> 		0265-2651802, <br />
              <b style={bold}>Email: </b> 		griserv@griserv.com<br />
              <b style={bold}>Website: </b> 	www.griserv.com<br />
            </p>
          </div>
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BAIF-Institute_BIRD_AP.pdf" >BAIF Institute for Rural Development
                (BIRD-Hyderabad) – Telangana and Andhra Pradesh
              </a> </b> <br />
              C/o Sri S. Yadagiri Reddy, H.No: 17-1-   <br />
              382/SN/22 <br />
              Srinivasa Nagar Colony, Near Sports Club <br />
              Champapet, Hyderabad - 500059 <br />
              <b style={bold}>Phone: </b> 	040-24075405<br />
              <b style={bold}>Email: </b> 	baif_ap@rediffmail.com <br />
              <b style={bold}>Website: </b> 	www.baifap.org<br />
            </p>
          </div>
          <div className="ui fitted divider" />
        </div>
        <div className="row" >
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/Rajasthan-RRIDMA.pdf" >Rajasthan Rural Institute of
                Development Management (RRIDMA)</a> </b> <br />
              BAIF Bhavan, G Block, Near <br />
              Community Hall, Hiran Magri, Sector  <br />
              14, Udaipur 313 002, Rajasthan <br />
              <b style={bold}>Phone : </b> 	6533707<br />
              <b style={bold}>Fax: </b> 		0294-2640133 <br />
              <b style={bold}>Email: </b> 		rridma@gmail.com<br />
              <b style={bold}>Website: </b> 		www.rridma.org<br />
            </p>
          </div>
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/Society_SPESD.pdf" >Society for Promotion of Eco-friendly Sustainable
                Development (SPESD)</a> </b> <br />
              E8/27, Basant Kunj, Arera Colony  <br />
              Bhopal 462 016, Madhya Pradesh <br />
              <b style={bold}>Phone: </b> 	0755-2561580 / 2561370<br />
              <b style={bold}>Email: </b> 		baifmp@gmail.com <br />

            </p>
          </div>
          <div className="ui fitted divider" />
        </div>
        <div className="row" >
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BAIF_Institute_BIRD_UP.pdf" >BAIF Institute for Rural Development -
                Uttar Pradesh (BIRD-UP)</a> </b> <br />
              27A , A.C. Banerjee Road, <br />
              LIC Colony, Allahabad 211002  <br />
              Uttar Pradesh <br />
              <b style={bold}>Phone : </b> 		0532-2466220<br />
              <b style={bold}>Fax: </b> 		0532-2465475 <br />
              <b style={bold}>Email: </b> 		ho.ald@bird-up.org<br />
              <b style={bold}>Website: </b> 			www.bird-up.org<br />
            </p>
          </div>
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BIRD-UP-Uttarakhand.pdf" >BIRD (UP) - Uttarakhand</a> </b> <br />
              Sarvapriya Bihar, Near Ramdev  <br />
              Ashram, Kankhal, Haridwar 249 408 <br />
              Uttarakhand <br />
              <b style={bold}>Phone: </b> 	01334-324512<br />
              <b style={bold}>Fax: </b> 		01334-240576 <br />
              <b style={bold}>Email: </b> 	baifuttarakhand@gmail.com <br />

            </p>
          </div>
          <div className="ui fitted divider" />
        </div>
        <div className="row" >
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BIRD_UP_Bihar.pdf" >BIRD (UP) - Bihar</a> </b> <br />
              House No. 2, Road No.8, <br />
              East Patel Nagar, <br />
              Patna 800023, Bihar <br />
              <b style={bold}>Phone : </b> 	0612-2292486<br />
              <b style={bold}>Email: </b> 	baif.bihar@yahoo.com<br />
              <b style={bold}>Website: </b> 	www.bird-bihar.org<br />
            </p>
          </div>
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BAIF_Institute_BIRVA.pdf" >BAIF Institute for Rural Vocations
                and Advancement (BIRVA)</a> </b> <br />
              Farmers' Training Centre Campus, <br />
              Near Sudha Dairy, HEC Sector II, <br />
              Dhurwa, Ranchi 834 004, Jharkhand <br />
              <b style={bold}>Phone: </b> 0651-2444188<br />
              <b style={bold}>Fax: </b> 0651-2440193 <br />
              <b style={bold}>Email: </b> 	baifjkd@dataone.in <br />
              <b style={bold}>Website: </b>www.birva.org<br />

            </p>
          </div>
          <div className="ui fitted divider" />
        </div>
        <div className="row" >
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BAIF_Agro_BABPL.pdf" >Vasundhara Agri-Horti Producer
                Co. Ltd. (VAPCOL)</a> </b> <br />
              Dr. Manibhai Desai Nagar, Warje, <br />
              Pune 411 058, Maharashtra <br />
              <b style={bold}>Phone : </b> 	020-25235414<br />
              <b style={bold}>Email: </b> 	vapcolpune@gmail.com<br />
            </p>
          </div>
          <div className="column">
            <p>
              <b style={bold}>  <a href="http://www.baif.org.in/pdf/associate_organisations/BAIF_Agro_BABTPL.pdf" >BAIF Agro and Biotechnology
                Pvt. Ltd. (BABTPL)</a> </b> <br />
              C/o. BAIF Central Research Station, <br />
              Urulikanchan, Pune 412 202 <br />
              <b style={bold}>Phone: </b> 	020-26926248<br />
              <b style={bold}>Fax: </b> 26926347 <br />
              <b style={bold}>Email: </b> office@babtpl.com<br />
            </p>
          </div>
          <div className="ui fitted divider" />
        </div>


      </div>


    )
  }
}