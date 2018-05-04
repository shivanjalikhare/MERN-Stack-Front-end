import React, { Component } from 'react';

const aboutUsTextSize = {
  fontSize: '15px',

};

export default class AboutUsText extends Component {
  render() {
    return (
      <div style={aboutUsTextSize} className="example">
        <div className="ui fluid image" style={{width:'1127px',height:'245px'}}>
          <div className="ui inverted dimmer transition hidden" >
            <div style={{textColor:'black'}}>
              <p>
                In March 1946, Mahatma Gandhi visited a remote village Urulikanchan near Pune to establish the Nature Cure Ashram, to promote rural upliftment and community health. The administration and farm management of the Ashram were entrusted to his trusted disciple, Manibhai Desai, who established a Charitable Trust and named it as the Bharatiya Agro Industries Foundation (BAIF), to transform the livelihood of the rural poor. The foundation stone of BAIF was laid on August 24, 1967 by the-then President of India Dr Zakir Hussain at Urulikanchan, near Pune. In 1989, the organisation was renamed as BAIF Development Research Foundation, to emphasis our focus on development research.  BAIF Development Research Foundation, Pune is a trust registered under Bombay Trust Act committed to the cause of sustainable rural development based on Gandhian principles.
                BAIF has established BIRD (BAIF Institute for Rural Development) Hyderabad in 1996 to implement development activities in erstwhile Andhra Pradesh. BIRD Hyderabad is now merged in BAIF Institute for Sustainable Livelihoods and Development (BISLD), an associate organization of BAIF to implement development activities across India. BISLD is registered as non-profit Company under section 8 (formerly Section 25) of the Company Act.
                BISLD Telangana (TS) & Andhra Pradesh (AP) branches are implementing livestock development, Natural Resource Management, Land based livelihoods and quality of life programmes in 14 districts of Telangana and 8 districts of Andhra Pradesh.
              </p>
            </div>
          </div>
          <img className="ui image" src="../assets/images/aboutus/aboutus.jpg" id="loadfun"  />
        </div>

      </div>
    )
  }
}
