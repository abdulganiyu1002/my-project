// src/pages/Home.js
import React from 'react';
import './Home.css'; // Assuming you'll be adding some CSS for styling

const Home = () => {
  return (
    <div className="home-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#markets">Markets</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="navbar-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Our Exchange</h1>
          <p>Trade cryptocurrencies with ease and security.</p>
          <button className="btn-cta">Get Started</button>
        </div>
      </header>

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
