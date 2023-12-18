// MainContent.js
import React from 'react';

function MainContent({ title, originalPrice, price, users,storage,support}) {
  return (
    <div className="MainContent">
      <div className="plan">
      <h2>{title}</h2>
      <p className="original-price">{originalPrice}</p>
      <p className="price">{price}</p>
      <button >Get Started <i style={{marginLeft:'2px'}} class className="fa-solid fa-arrow-right-long"></i></button>
<hr />
      <ul>
        <div className='get'>What you'll get:</div>
        
          <li ><i className="fa-regular fa-user"></i> {users}</li>
          <li ><i className="fa-solid fa-cloud-arrow-up"></i>{storage}</li>
          <li ><i class="fa-regular fa-envelope"></i>{support}</li>
        
      </ul>
    </div>
    </div>
  );
}

export default MainContent;
