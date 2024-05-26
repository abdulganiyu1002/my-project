// src/pages/Home.js
import React from 'react';
import './Home.css'; // Assuming you'll be adding some CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      

      
      {/* Market Highlights */}
      <section className="market-highlights">
        <h2>Market Highlights</h2>
        <div className="market-cards">
          <div className="market-card">
            <h3>Bitcoin</h3>
            <p>BTC/USD</p>
            <p>Price: $30,000</p>
          </div>
          <div className="market-card">
            <h3>Ethereum</h3>
            <p>ETH/USD</p>
            <p>Price: $2,000</p>
          </div>
          {/* Add more market cards as needed */}
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features">
          <div className="feature">
            <h3>Secure Trading</h3>
            <p>Trade with confidence using our secure platform.</p>
          </div>
          <div className="feature">
            <h3>Low Fees</h3>
            <p>Enjoy low trading fees on all transactions.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Our support team is here to help you anytime.</p>
          </div>
          {/* Add more features as needed */}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Our Exchange. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
