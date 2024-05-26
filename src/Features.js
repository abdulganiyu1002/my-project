import React from 'react';
import './Features.css';

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Key Objectives</h2>
        <div className="feature">
          <div className="icon">&#128176;</div>
          <h3>Secure Trading</h3>
          <p>To implement secure user authentication and authorization mechanisms.</p>
        </div>
        <div className="feature">
          <div className="icon">&#128200;</div>
          <h3>Real Time Update</h3>
          <p>To integrate with cryptocurrency exchanges and market data providers for real-time data updates</p>
        </div>
        <div className="feature">
          <div className="icon">&#128178;</div>
          <h3>Real-Time Data</h3>
          <p>Get live updates on market prices</p>
        </div>
        <div className="feature">
          <div className="icon">&#128179;</div>
          <h3>Advanced Tools</h3>
          <p>Utilize advanced trading tools for analysis</p>
        </div>
        <div className="feature">
          <div className="icon">&#128273;</div>
          <h3>24/7 Support</h3>
          <p>Get assistance round-the-clock</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
