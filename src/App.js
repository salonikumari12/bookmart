import React from 'react';More actions
import SignUp from './components/SignUp';
import Login from './components/Login';
import SellerDashboard from './components/SellerDashboard';
import BuyerDashboard from './components/BuyerDashboard';

function App() {
  return (
    <div className="App">
      <h1>📚 Welcome to BookMart 📚</h1>
      {/* Placeholder to render components */}
      <SignUp />
      <Login />
      <SellerDashboard />
      <BuyerDashboard />
    </div>
  );
}

export default App;
