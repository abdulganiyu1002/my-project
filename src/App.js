import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Hero from './Hero';
import Features from './Features';
import Footer from './Footer';
import Dashboard from './components/Dashboard';
import Login from './Login';
import SignupForm from './SignupForm';
import Home from './Home.jsx';
import TradeInterface from './components/TradeInterface';
import PrivateRoute from './components/PrivateRoute';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ backgroundColor: 'gray', minHeight: '100vh' }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route exact path="/signup" component={SignupForm} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/features" component={Features} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/trade" component={TradeInterface} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/trade" component={TradeInterface} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
