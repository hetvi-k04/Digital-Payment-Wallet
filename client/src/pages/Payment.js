import React, { useState } from 'react';

const Payment = () => {
  const [amount, setAmount] = useState('');

  const handlePayment = () => {
    console.log('Payment Amount:', amount);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Make a Payment</h1>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ display: 'block', margin: '10px 0' }}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
