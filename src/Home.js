import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="main-content">
      <h1>Welcome</h1>
      <p>
       " to Sinet Education, the leading ISO certified <br />
        Educational and Job training brand "
      </p>

      <br />

      <p>Click here to choose your course:</p>

      <div className="image1">
        <img src="sin acc.webp" alt="Accounting" />
        <img src="sin multi.webp" alt="Multimedia" />
      </div>

      <div className="image2">
        <img src="sin net.webp" alt="Networking" />
        <img src="sin soft.webp" alt="Software" />
      </div>

      <br />
    </div>
  );
};

export default Home;