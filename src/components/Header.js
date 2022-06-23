import React from 'react';

class Header extends React.Component {
  render() {
    return (
      
      <div className='header'>
      <div>
          <img className='header-logo' src={require('./img/if_act_logo.png')} />
          
      </div>
      <div className='header-right'>
        <a href="#">HOME</a>
			  <a href="#how_to">CARA MENGGUNAKAN</a>
			  <a href="#to_do" class="login">MEMASUKAN AKTIFITAS</a>
      </div>
      </div>
    );
  }
}

export default Header;
