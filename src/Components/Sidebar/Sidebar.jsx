// Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <div className="Sidebar">
     <div className='profile'>
        <img src="https://1.bp.blogspot.com/-uXwu5Se92YQ/XzLJMRy6IXI/AAAAAAAAD78/K2UMkubjq-EnNITfudfq1-WD6flUvWKPwCLcBGAsYHQ/s801/PicsArt_08-11-11.45.11.jpg" alt="" />
        <h4>Ram Mohan </h4>
        <h6>rammohan2@gmail.com</h6>
     </div>
     <ul>
      <li className='items' style={{backgroundColor:'#96d1f9'}}><i style={{paddingRight:'0.6rem', color: '#0f45a3'}} className="fa-solid fa-layer-group"></i> Dashboard</li>
      <li className='items'><i style={{paddingRight:'0.6rem', color: '#0f45a3'}} className="fa-solid fa-spa"></i>Perks</li>
      <li className='items'><i style={{paddingRight:'0.6rem', color: '#0f45a3'}} className="fa-solid fa-puzzle-piece"></i>Addons</li>
      <li className='items'><i style={{paddingRight:'0.6rem', color: '#0f45a3'}} className="fa-solid fa-circle-question"></i>FAQ</li>
      <li className='items'><i style={{paddingRight:'0.6rem', color: '#0f45a3'}} className="fa-solid fa-handshake-angle"></i>Support</li>
     </ul>
     <button className='logout'>Logout<i style={{paddingLeft:'0.6rem'}} className="fa-solid fa-power-off"></i></button>
    </div>
  );
}

export default Sidebar;
