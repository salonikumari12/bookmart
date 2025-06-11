import React from 'react';

const SignUp = () => {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      {/* Placeholder form */}
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
