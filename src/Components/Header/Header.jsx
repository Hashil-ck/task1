// Header.js
import React from 'react';
import proto from '../../images/proto.png'
function Header() {
  return (
    <div className="Header">
        
      <div className="logo">
         <img src={proto} alt="logo" /> 
         </div>
      <div className='info'>
          <div className="profile-info"> 
          <img src="https://images.pexels.com/photos/949587/pexels-photo-949587.jpeg?auto=compress&cs=tinysrgb&w=600" alt="img" />
          <>XYZ Enterprises Pvt. Ltd</>
           </div>
          <div className="dropdown"> <i class="fa-solid fa-angle-down"></i> </div>

      </div>
    </div>
  );
}

export default Header;
