import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='footer-inner'>
          <div className='footer-logo'>
          <img  src={require('./img/if_act_logo_footer.png')} />
          </div>
          <ul className='footer-list'>
            <li>IF ACTIVITY &#169; 2022 All Rights Reserved </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Footer;
