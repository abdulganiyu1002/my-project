import React from 'react';
import Header from './Header';
import UserManagement from './UserManagement';
import TransactionMonitoring from './TransactionMonitoring';
import AnalyticsDashboard from './AnalyticsDashboard';

const AdminDashboard = () => {
  return (
    <div>
      <Header userType="admin" />
      <div className="dashboard-content">
        <UserManagement />
        <TransactionMonitoring />
        <AnalyticsDashboard />
      </div>
    </div>
  );
};

export default AdminDashboard;
