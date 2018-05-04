import React from 'react';
import { Tabs, TabLink, TabContent } from 'react-tabs-redux';
import MenuExampleInverted from "./navbar";
import FooterInverted from "./footer";
import MenuSecondExampleInverted from "./secondhomenavbar";

const margin = {
  marginTop: '180px'
}

const styles = {
  tabs: {
    width: '1000px',
    display: 'inline-block',
    marginRight: '100px',
    verticalAlign: 'top'
  },
  links: {
    margin: 0,
    padding: 0
  },
  tabLink: {
    height: '30px',
    lineHeight: '30px',
    padding: '0 15px',
    cursor: 'pointer',
    display: 'inline-block'
  },
  activeLinkStyle: {

    width: '30px',
  },
  visibleTabStyle: {
    width: '1000px',
    display: 'inline-block',
    boxShadow: '0px 0px 0px 1px #DDDDDD',
    padding: '15px 15px'

  },
  visibleExecStyleFirst: {
    width: '500px',
    marginLeft: '30px',
    display: 'inline-block'
  },
  content:{
    marginTop:'100px',
  }
};


export default class ResearchPage extends React.Component {

  constructor() {
    super();
    this.state = { tabIndex: 0 };
  }

  render() {

    return (

      <div>
        <MenuExampleInverted />
        <MenuSecondExampleInverted />
        <div className="column">
          <div style={margin}>
            <Tabs activeLinkStyle={styles.activeLinkStyle} visibleTabStyle={styles.visibleTabStyle} style={styles.tabs}>
              <div style={styles.links}>
                <div className='ui grid'>
                  <div className='four wide column'>
                    <TabLink to="tab1" default style={styles.tabLink}><button className="ui big inverted green button">Core Group Management</button></TabLink>
                  </div>
                  <div className='four wide column'>
                    <TabLink to="tab2"  style={styles.tabLink}><button className="ui big inverted green button">Executive Committee</button></TabLink>
                  </div>
                  <div className='four wide column'>
                    <TabLink to="tab3" style={styles.tabLink}><button className="ui big inverted green button">Res. Coord Comm</button></TabLink>
                  </div>
                  <div className='four wide column'>
                    <TabLink><a href="http://www.baif.org.in/pdf/Organisational%20Structure-2017.pdf" style={styles.tabLink}><button className="ui big inverted green button">Organizational Structure</button></a></TabLink>
                  </div>
                </div>
              </div>

              <div style={styles.content}>
                <TabContent for="tab1">
                  <h2 >Core Group Management</h2>
                  <div className="ui sixteen column inverted very relaxed grid" style={{marginLeft:'0px',}}>
                    <div className="row">
                      <p>
                        Mr. G. G. Sohani <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}> President and Managing Trustee </i> <br/>
                      </p>
                    </div>
                    <div className="row">
                      <p>
                        Mr. S. B. Karvande <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Adviser and Secretary</i><br/>
                      </p>
                    </div>
                    <div className="row">
                      <p>
                        Dr. A. B. Pande <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Senior Vice President (Livestock Technology)</i><br/>
                      </p>
                    </div>
                    <div className="row">
                      <p>
                        Mr. B. K. Kakade<br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}> Executive Vice President</i><br/>
                      </p>
                    </div>
                    <div className="row">
                      <p>
                        Dr. D. N. Shindey<br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}> Vice President (Programmes)</i><br/>
                      </p>
                    </div>
                    <div className="row">
                      <p>
                        Mr. A. K. Sinha<br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}> Vice President (Programmes)</i><br/>
                      </p>
                    </div>
                    <div className="row">
                      <p>
                        Mr. S. C. Gijare<br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}> Group Vice President (HR and Administration)</i><br/>
                      </p>
                    </div>
                    <div className="row">
                      <p>
                        Mr. S. V. Kulkarni<br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>  Group Vice President - Finance</i><br/>
                      </p>
                    </div>
                  </div>
                </TabContent>
                <TabContent for="tab2" >
                  <h2>Executive Committee</h2>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Mr. G. G. Sohani <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>President and Managing Trustee</i> <br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Mr. J. R. Mori<br />
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Programme Executive</i> <br />
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Mr. S. B. Karvande <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Adviser and Secretary</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Mr. V. B. Dyasa <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Programme Executive</i> <br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Dr. A. B. Pande <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Senior Vice President (Livestock Technology)</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Mr. S. K. Pandey <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Programme Executive</i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Mr. B. K. Kakade <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Executive Vice President</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Mr. L. R. Singh <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Programme Executive</i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Dr. D. N. Shindey <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Vice President (Programmes)</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Dr. R. S. Jadhav <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Programme Executive</i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Mr. A. K. Sinha <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Vice President (Programmes)</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Dr. M. K. Shrivastava <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Programme Executive</i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Mr. S. C. Gijare <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Group Vice President(HR and Administration)</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Mr. P. G. Patil <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Programme Executive</i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Mr. S. V. Kulkarni <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Group Vice President - Finance</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Ms. P. Chandak <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Executive Finance Director</i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Mr. B. Shivarudrappa <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Programme Director</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Dr. R. Joshi <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Thematic Programme Executive - Programmes</i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Dr. J. R. Khadse <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Research Director</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Mr. P. S. Takawale <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Thematic Programme Executive - Research</i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Dr. A. Juneja <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Programme Director - Livestock</i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Mr. B. D. Pakhare <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Thematic Programme Executive - Construction </i><br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Tech. & Infrastructure Management </i><br/>
                      </p>
                    </div>
                  </div>
                  <div className="ui sixteen column very relaxed grid" >
                    <div className="eight wide column">
                      <p >
                        Mr. V. Y. Deshpande <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Programme Director </i><br/>
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        Mr. R. S. Sharma <br/>
                        < i style={{fontWeight:"bold",color:'#009933'}}>Chief Programme Executive </i><br/>

                      </p>
                    </div>
                  </div>
                </TabContent>
                <TabContent for="tab3">
                  <h2>Research Coordination Committee </h2>
                  <div className="ui sixteen column very relaxed grid" style={{marginTop:'50px'}}>
                    <div className="row" style={{marginLeft:'313px'}}>
                      <p >
                        Dr. A.B. Pande, <br />
                        <i style={{fontWeight:"bold",color:'#009933'}}> Chairman </i> <br />
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        <b style={{color:'#009933'}}> Members </b><br />
                        Mr. B.K. Kakade  <br />
                        Dr. J.N. Daniel  <br />
                        Dr. J.N. Daniel  <br />
                      </p>
                    </div>
                    <div className="eight wide column">
                      <p >
                        <b style={{color:'#009933', marginLeft:'50px'}}> Associate Members </b><br />
                        Dr. J.R. Khadse <br />
                        Dr. J.N. Daniel	Mr. P.S. Takawale<br />
                        Dr. S.S. Roy	Dr. M. Swaminathan<br />
                        Ms. Veena Halwe<br />

                      </p>
                    </div>
                    <div className="row" style={{marginLeft:'313px'}}>
                      <p >
                        Mr. S.E. Pawar, <br />
                        <i style={{fontWeight:"bold",color:'#009933'}}> Convenor </i> <br />
                      </p>
                    </div>
                  </div>
                </TabContent>
              </div>
            </Tabs>
          </div>
        </div>
        <FooterInverted/>
      </div>



    )


  }

}