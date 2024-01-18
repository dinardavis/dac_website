import React from 'react';
import { Link } from 'react-router-dom'
import rightsGraphicLeft from  "../../assets/imgs/graphics/rightsGraphicLeft.png"
import rightsGraphicRight from  "../../assets/imgs/graphics/rightsGraphicRight.png"
import dacLogoWhite from  "../../assets/imgs/logo_white.png"

export default function RightsHome() {
  return (
    <div id='rights' className='rights-container'>
      <div className='rights-banner burgundy-linear-gradient'>
        <img src={rightsGraphicLeft} className="rights-graphic-left-mobile" alt="" />
        <div className='rights-content'>
          <h1 className='rights-header'>Know Your Rights!</h1>
          <img src={dacLogoWhite} className='rights-dac-logo' alt='DAC logo' />
          <div className='rights-link-container'>
            <img src={rightsGraphicLeft} className="rights-graphic-left" alt="" />
            <Link to="/know-your-rights" className='rights-link'>
              <div className='rights-cta  btn-hover'>Visit Our Resource Page</div>
            </Link>
            <img src={rightsGraphicRight} className="rights-graphic-right" alt="" />
          </div>
        </div>
        <img src={rightsGraphicRight} className="rights-graphic-right-mobile" alt="" />
      </div>
    </div>
  )
}