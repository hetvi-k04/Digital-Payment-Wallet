import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletBalance } from '../store/actions/walletActions';

const DashboardPage = () => {
  const dispatch = useDispatch();
  const { balance, error } = useSelector(state => state.wallet);

  useEffect(() => {
    dispatch(getWalletBalance());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Your balance: ${balance}</p>
    </div>
  );
};

export default DashboardPage;
