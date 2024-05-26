import React from 'react';
import Header from './Header';
import AccountSummary from './AccountSummary';
import TradingCharts from './TradingCharts';
import TransactionHistory from './TransactionHistory';

const UserDashboard = () => {
  return (
    <div>
      <Header userType="user" />
      <div className="dashboard-content">
        <AccountSummary />
        <TradingCharts />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default UserDashboard;
