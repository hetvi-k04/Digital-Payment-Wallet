import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../store/actions/userActions';
import { Input, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(loginUser(email, password)).then(() => {
      navigate('/dashboard');
    });
  };

  return (
    <div>
      <Input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <Input.Password
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default LoginPage;
