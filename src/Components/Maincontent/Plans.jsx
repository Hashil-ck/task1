import React from 'react';
import MainContent from './MainContent';
const Contents = () => {
  const plans = [
    {
      title: 'Basic',
      originalPrice: '$89.99/mo',
      price: '$9.99/mo',
      users:'Upto 25 Users',
      storage:'Upto 25gb Storage',
      support:'Email Support'
    },
    {
        title: 'Standard',
        originalPrice: '$189.99/mo',
        price: '$99.99/mo',
        users:'Upto 50 Users',
        storage:'Upto 60gb Storage',
        support:'Email+Chat Support'
      },
      {
        title: 'Premium',
        originalPrice: '$389.99/mo',
        price: '$199.99/mo',
        users:'Upto 75 Users',
        storage:'Upto 100gb Storage',
        support:'Email+Chat+Whatsapp Support'
      }
  ];

  return (
   <div className='plans-body'>
         <h1 className='heds'>Choose a plan that's right for you ! </h1>

        <div className="plans-grid">
          {plans.map((plan, index) => (
            <MainContent key={index} {...plan} />
          ))}
        </div>
        <div className='grid'>
            
            <div className="forever">
      <div>
          <div className="free-forever">Free Forever</div>
          <h2>Free Starter</h2>
          <p>The quickest and easiest way to try Protocols with basic functionalities</p>
          <button>Get Started</button>
      </div>
     <div>
          <h3>What you'll get:</h3>
          <ul>
              <li >Upto 8 Users</li>
              <li>Upto 3gb Storage</li>
              <li>Email Support</li>
              <li>Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included</li>
              <li></li>
            
          </ul>
     </div>
    </div>
            <div className="enterprise">
      <div>
          <div className="enterprise-plan">Enterprise Plan</div>
          <h2>Free Starter</h2>
          <p>The quickest and easiest way to try Protocols with basic functionalities</p>
          <button>Get Started</button>
      </div>
     <div>
          <h3>What you'll get:</h3>
          <ul>
              <li >Upto 8 Users</li>
              <li>Upto 3gb Storage</li>
              <li>Email Support</li>
              <li>Basics of Documents, Task Flow, Voting, Accounting, Banking, Notes, Investor, Director and Team Management included</li>
              <li></li>
            
          </ul>
     </div>
    </div>
            
        </div>
   </div>
  );
};

export default Contents;
