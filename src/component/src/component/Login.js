import React from 'react';

const Login = () => {
  return (
    <div className="login">
      <h2>Login</h2>
      {/* Placeholder form */}
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
