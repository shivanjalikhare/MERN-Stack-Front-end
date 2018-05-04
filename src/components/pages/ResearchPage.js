import React from "react";
import MenuExampleInverted from "./navbar";
import FooterInverted from "./footer";
import { Image } from 'semantic-ui-react';
import MenuSecondExampleInverted from "./secondhomenavbar";

const aboutUsTextSize = {
  fontSize: '20px',
  marginTop: '150px',
}



export default class ResearchPage extends React.Component {

  render(){
    return (
      <div>
        <MenuExampleInverted />
        <MenuSecondExampleInverted />
        <div className="ui fluid image" style={{marginTop: '188px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div style={{textColor:'black',fontSize:'18px'}}>
              <p>
                The Dairy Development Programme aims at improving the livestock breed through artificial
                insemination for enhanced production. Promotion of goat husbandry and backyard poultry for landless, small and marginal farmers is another activity. The key components are:
                <ul>
                  <li>
                    Genetic improvement of livestock through artificial insemination centres, each catering to a cluster of about 12-15 villages
                  </li>
                  <li>
                    Preventive health care and first aid services
                  </li>
                  <li>
                    Promotion of fodder production and feed management
                  </li>
                  <li>
                    Facilitation for developing value chains for both dairy and goat development programmes
                  </li>
                </ul>
                <div className="four column centered row">
                  <div className="column" style={{width:'128px',height:'120px',marginLeft:'300px'}}>
                    <Image src='../assets/images/aboutus/Outreach1.jpg' />
                  </div>
                  <div className="column" style={{width:'153px',height:'120px',marginLeft:'673px', marginTop:'-120px'}}>
                    <Image src='../assets/images/aboutus/Outreach2.jpg'/>
                  </div>

                </div>
              </p>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/Our-Vision.png" id="loadfun"  />
        </div>
        <div>
          <div className="row" style={{marginTop: '-74'}}>
            <p style={aboutUsTextSize}>
              <b>
                BISLD-Telangana (TS) & Andhra Pradesh (AP) branches are operating 138 Cattle Breeding Centers in
                both
                the states. Following tables shows coverage & progress of the programme </b>
              <br/></p>
            <p style={{marginLeft: "130px"}}><b><Image src='../assets/images/aboutus/Outreach3.jpg'/></b> <br/>
            </p>
          </div>
        </div>
        <div className="ui fluid image" style={{marginTop: '8px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div style={{textColor:'black',fontSize:'20px', marginTop:'34px'}}>
              <p> <b>
                Production of more female calves helps the farmers to save resources & speed up genetic improvement.
                Presently it is commercially available only for Pure HF and Jersey breeds of cattle. BAIF is
                planning to
                produce sorted semen in indigenous breeds in the coming years. The use of sorted semen in AP has
                started
                from August 2017 in Chittoor, Krishna, West Godavari and Guntur districts.
              </b>
              </p>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/sortedsemen.png" id="loadfun"  />
        </div>
        <div className="ui fluid image" style={{marginTop: '8px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div className="ui two column very relaxed grid">
              <div className="column" style={{textColor:'black',fontSize:'20px'}}>
                <p> <b>
                  Cattle Breeders Associations are community based institutions formed with an aim to sustain the
                  breeding
                  programme beyond the project period. Two such district level associations are successfully
                  running in
                  Mahabubnagar and Karimnagar districts in Telangana since 1996. These associations are buying
                  critical
                  inputs from BISLD and hiring services of technical persons. They have built up sufficient corpus
                  for
                  continuing the breeding programme without depending on any donor agency. These associations are
                  breeding, health care and extension services on cost through well trained staff.
                </b>
                </p>
              </div>
              <div className="column" >
                <div className="ui segment" style={{width:'279px',height:'375px'}}>
                  <p><b><Image src='../assets/images/aboutus/CBA.jpg' /></b> <br/></p>
                </div>
              </div>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/cba.png" id="loadfun"  />
        </div>
        <div className="ui fluid image" style={{marginTop: '8px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div className="ui three row very relaxed grid">
              <div className="row" style={{textColor:'black',fontSize:'19px',marginLeft:'20px',marginRight:'30px'}}>
                <p> <b>
                  Sustainable management of natural resources for sustainable development of community and
                  ecosystem is the key aspect in this programme. The projects under NRM include:
                </b>
                </p>
              </div>
              <div className="row" >
                <div className="ui two column very relaxed grid">
                  <div className='column' style={{marginTop:'-48px'}}>
                    <p style={{fontSize:'15px'}}>
                      <ul>
                        <li> Watershed Development</li>
                        <li> Landscape Approach for resource management through convergence of resources</li>
                        <li> Region-specific innovative approaches for water resource management</li>
                        <li> Promotion of efficient water use technologies</li>
                        <li> Silvipasture for conservation of wastelands and production of fodder</li>
                        <li> Promotion of non-conventional energy such as solar and bio-energy</li>
                        <li> Climate change adaptation and mitigation</li>
                      </ul>
                    </p>
                  </div>
                  <div className="column">
                    <div className="ui left floated segment" style={{marginLeft:'143px',marginTop:'-41px',width:'200px',height:'200px'}}>
                      <p><b><Image src='../assets/images/aboutus/waterMan.jpg' /></b> <br/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop:'-53px',marginLeft:'56px',marginRight:'30px'}}>
                <p style={{fontSize:'18px'}}>
                  BISLD has implemented NRM projects treating 18818 Ha. area covering 8921 families and also
                  rehabilitated
                  25 village tanks to create the storage capacity of 283261 cum.
                </p>
              </div>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/NRM.png" id="loadfun"  />
        </div>
        <div className="ui fluid image" style={{marginTop: '8px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div className="ui three row very relaxed grid">
              <div className="row" style={{textColor:'black',fontSize:'18px',marginLeft:'28px',marginRight:'30px'}}>
                <p> <b>
                  Based on the resource base of the families and the area, the projects are designed to create a
                  source of
                  sustainable livelihood in the farm. The projects are mainly implemented in the tribal and
                  resource poor
                  areas. The main projects include:
                </b>
                </p>
              </div>
              <div className="row" >
                <div className="ui two column very relaxed grid">
                  <div className='column' style={{marginTop:'-48px'}}>
                    <p style={{fontSize:'15px'}}>
                      <ul>
                        <li> Wadi (Agri-horti-forestry based livelihood)</li>
                        <li> Improved agriculture practices for enhanced production and income</li>
                        <li> Climate smart agriculture</li>
                        <li> Organic farming</li>
                        <li> Agri-business through local people’s organizations</li>
                      </ul>
                    </p>
                  </div>
                  <div className="column">
                    <div className="ui left floated segment" style={{marginLeft:'143px',marginTop:'-41px',width:'180px',height:'132px'}}>
                      <p><b><Image src='../assets/images/aboutus/NaturalR.jpg' /></b> <br/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop:'-53px',marginLeft:'56px',marginRight:'30px'}}>
                <p style={{fontSize:'18px'}}>
                  BISLD has adopted Tree based farming system(TBFS) in association with MGNREGA and IWMP projects
                  in
                  Telangana and AP states. It has successfully completed the projects in Mahabubnagar Vikarabad,
                  Wanaparthy districts of Telangana & Anantapur district of Andhra Pradesh covering 1450 ha
                  benefitting
                  832 families.
                </p>
              </div>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/crf.png" id="loadfun"  />
        </div>
        <div className="ui fluid image" style={{marginTop: '8px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div className="ui three row very relaxed grid">
              <div className="row" style={{textColor:'black',fontSize:'18px',marginLeft:'28px',marginRight:'30px'}}>
                <p>
                  Agribusiness centres (ABC) are established in Andhra Pradesh and Telangana states through
                  Corporate
                  Social Responsibility support. ABCs are the informal farmer’s institutions providing a platform
                  for the
                  farmers to come together to address their critical needs. ABCs have taken up activities like
                  bulk
                  procurement of agri-inputs and custom hiring of agri implements. The main aim of ABC is to
                  promote
                  agriculture as profitable enterprise to the target families to enhance their livelihoods.
                </p>
              </div>
              <div className="row" >
                <div className="ui two column very relaxed grid">
                  <div className='column' style={{marginTop:'-48px'}}>
                    <p style={{fontSize:'18px'}}>
                      At present there are 77 ABCs in AP and 17 ABCs in Telangana states together covering 5966
                      farming
                      families. Each family is getting financial support ranging from Rs.3000 to Rs.18000 for
                      agriculture
                      inputs. These ABCs are running Custom Hiring Centre (CHC) of Agri implements. The revenue
                      generated
                      through hiring of implements will be used to procure new implements required to the community
                      and
                      maintenance of existing implements. There are 61 CHCs functioning in both the
                      states.
                    </p>
                  </div>
                  <div className="column">
                    <div className="ui left floated segment" style={{marginLeft:'143px',marginTop:'-41px',width:'269px',height:'200px'}}>
                      <p><b><Image src='../assets/images/research/deve.jpg' /></b> <br/></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row" style={{marginTop:'-53px',marginLeft:'12px',marginRight:'30px'}}>
                <div className="ui two column very relaxed grid">
                  <div className='column' style={{marginTop:'-48px'}}>
                    <p style={{fontSize:'18px'}}>
                      Micro nutrient laboratory is established for analysing soil, water and plant samples. This Micro
                      nutrient lab sponsored by Mahindra & Mahindra is located in Mahabubnagar town serving Telangana,
                      Andhra
                      Pradesh& Karnataka states.This lab has analysed more than 6000 soil samples so far and shared the reports with community,
                      Awareness meetings, field demonstrations cum training programmes were arranged for creating
                      awareness on
                      importance of soil testing to the farmers.
                    </p>
                  </div>
                  <div className="column">
                    <div className="ui right floated segment" style={{marginLeft:'143px',marginTop:'-41px',width:'332px',height:'200px'}}>
                      <p><b><Image src='../assets/images/research/deve2.jpg' /></b> <br/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/dab.png" id="loadfun"  />
        </div>
        <div className="ui fluid image" style={{marginTop: '8px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div className="ui two row very relaxed grid">
              <div className="row" style={{textColor:'black',fontSize:'19px',marginLeft:'46px',marginRight:'30px'}}>
                <p> <b>
                  This programme aims at improving the quality of life of the participant families through
                  preventative
                  health measures and development initiatives as given below:
                </b>
                </p>
              </div>
              <div className="row" >
                <div className="ui two column very relaxed grid">
                  <div className='column' style={{marginTop:'-48px'}}>
                    <p style={{fontSize:'15px'}}>
                      <ul>
                        <li> Clean drinking water supply, sanitation, and hygiene</li>
                        <li> Human health check up</li>
                        <li> Agriculture-nutrition and nutrition supplementation</li>
                        <li> Promotion of backyard gardens for better family nutrition</li>
                        <li> Women Empowerment through</li>
                        <ul>
                          <li style={{listStyleType: 'none'}}>- Promotion of Self Help Groups of Women</li>
                          <li style={{listStyleType: 'none'}}>- Drudgery reduction technologies</li>
                          <li style={{listStyleType: 'none'}}>- Empowerment of women through micro-enterprises
                          </li>
                        </ul>
                      </ul>
                    </p>
                  </div>
                  <div className="column">
                    <div className="ui left floated segment" style={{marginLeft:'143px',marginTop:'-41px',width:'200px',height:'200px'}}>
                      <p><b><Image src='../assets/images/research/life.jpg' /></b> <br/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/qol.jpg" id="loadfun"  />
        </div>

        <div className="ui fluid image" style={{marginTop: '8px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div className="ui two row very relaxed grid">
              <div className="row" style={{textColor:'black',fontSize:'19px',marginLeft:'46px',marginRight:'30px'}}>
                <p> <b>
                  Community empowerment, promotion of leadership among community members and skill development for
                  self-employment are the key measures. The important activities include the following:
                </b>
                </p>
              </div>
              <div className="row" >
                <div className="ui two column very relaxed grid">
                  <div className='column' style={{marginTop:'-48px'}}>
                    <p style={{fontSize:'15px'}}>
                      <ul>
                        <li> Awareness generation on overall development and entitlements</li>
                        <li> Promotion of People’s Institutions for continued and sustainable development</li>
                        <li> Skill development of rural youth in various farm-based and non-farm vocations</li>
                        <li> Nearly 250 youths trained in AI Technology and earning Rs. 10,000 – 20,000 per month
                          and other
                          20 youths trained in computer operation, driving and electrician courses. These youths
                          are
                          earning Rs. 8000 to Rs. 12000 per month.
                        </li>

                      </ul>
                    </p>
                  </div>
                  <div className="column">
                    <div className="ui left floated segment" style={{marginLeft:'143px',marginTop:'-41px',width:'200px',height:'200px'}}>
                      <p><b><Image src='../assets/images/research/sde.jpg' /></b> <br/></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/sde.png" id="loadfun"  />
        </div>

        <div className="ui fluid image" style={{marginTop: '8px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div className="ui row very relaxed grid">
              <div  style={{textColor:'black',fontSize:'19px',marginLeft:'46px',marginRight:'30px',marginTop:'20px'}}>
                <p> <b>
                  A family with three milch animals earns a net income of Rs. 30,000 - 45,000 per annum while a
                  small
                  landholding family through Wadi (Agri-horti-forestry based livelihood) is able to earn Rs.
                  40,000 -
                  55,000 per year per acre and come out of poverty. With the increase in cropping area by 20-30%,
                  the
                  watershed development programme generates year-round employment even for landless and increase
                  in crop
                  production by 35-60%. The quality of life of the community especially of women and children has
                  increased with various health measures and development initiatives.
                </b>
                </p>
              </div>
            </div>
          </div>
          <img className="ui image" src="../assets/images/research/PI.png" id="loadfun"  />
        </div>

        <div className="ui items">
          <div className="item">
            <div className="image">
              <img src="../assets/images/research/contact.jpg" />
            </div>
            <div className="content">
              <a className="header">For further Details, Contact:</a>
              <div className="description">
                <p>
                  The Program Director <br/>
                  BAIF Institute for Sustainable Livelihoods and Development <br/>
                  H.No: 17-1-382/SN/22, Srinivasa Nagar Colony <br/>
                  Near Sports Club, Champapet, Hyderabad – 500 059 <br/>

                </p>
              </div>
              <div className="extra">
                Phone : 040-24075405, 24076064 <br/>
                Email: baif_ap@rediffmail.com <br/>
              </div>
            </div>
          </div>
        </div>
        <FooterInverted/>
      </div>

    )
  };
}






