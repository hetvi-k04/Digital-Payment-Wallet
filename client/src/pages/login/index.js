import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Row, Form, Input } from 'antd';


const onFinish = (values) => {
  console.log('Received values of form', values);
};

function Login() {
  const navigate = useNavigate();

  const redirectToRegister = () => {
    navigate('/register');
  };

  return (
    <div className="login-container">
      <h1 className="login-title">PAYTM WALLET - Login</h1>
      <div className="register-link" onClick={redirectToRegister}>
        Not a Member?
      </div>

      <Form layout="vertical" className="login-form" onFinish={onFinish}>
        <Row gutter={[16]}>
          {/* Email */}
          <Col span={24}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: 'Please enter your email!' },
                { type: 'email', message: 'Please enter a valid email address!' },
              ]}
            >
              <Input placeholder="Enter Email" />
            </Form.Item>
          </Col>

          {/* Password */}
          <Col span={24}>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <Row>
          <Col span={24}>
            <button className="login-submit-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Login;
