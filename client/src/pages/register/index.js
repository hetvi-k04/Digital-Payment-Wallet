import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Col, Row, Form, Select, Input } from 'antd';

const { Option } = Select;

const onFinish = (values) => {
  console.log('Received values of form', values);
};

function Index() {
  const navigate = useNavigate(); // Initialize navigate function

  const redirectToLogin = () => {
    navigate('/login'); // Navigate to login page
  };

  return (
    <div className="m-5">
      <div className="flex justify-between items-center"></div>
      <h1 className="text-xl">PAYTM WALLET - REGISTER</h1>
      <div
        className="text-sm underline text-blue-500 cursor-pointer hover:text-blue-700"
        onClick={redirectToLogin} // Add click handler
      >
        Already a Member? Log in
      </div>

      <hr />
      <Form layout="vertical" style={{ marginTop: '20px' }} onFinish={onFinish}>
        <Row gutter={[24]}>
          {/* First Name */}
          <Col span={6}>
            <Form.Item
              label="First Name"
              name="firstname"
              rules={[{ required: true, message: 'Please enter your first name!' }]}
            >
              <Input placeholder="Enter First Name" />
            </Form.Item>
          </Col>

          {/* Last Name */}
          <Col span={6}>
            <Form.Item
              label="Last Name"
              name="lastName"
              rules={[{ required: true, message: 'Please enter your last name!' }]}
            >
              <Input placeholder="Enter Last Name" />
            </Form.Item>
          </Col>

          {/* Email */}
          <Col span={6}>
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

          {/* Phone Number */}
          <Col span={6}>
            <Form.Item
              label="Phone Number"
              name="phoneNumber"
              rules={[
                { required: true, message: 'Please enter your phone number!' },
                { pattern: /^[0-9]{10}$/, message: 'Please enter a valid 10-digit phone number!' },
              ]}
            >
              <Input placeholder="Enter Phone Number" />
            </Form.Item>
          </Col>

          {/* Identification Type */}
          <Col span={6}>
            <Form.Item
              label="Identification Type"
              name="idType"
              rules={[{ required: true, message: 'Please select your Identification Type!' }]}
            >
              <Select placeholder="Select Identification Type">
                <Option value="aadhar">Aadhar Card</Option>
                <Option value="license">License</Option>
                <Option value="pan">PAN Card</Option>
                <Option value="voter">Voter ID</Option>
              </Select>
            </Form.Item>
          </Col>

          {/* Identification ID */}
          <Col span={6}>
            <Form.Item
              label="Identification ID"
              name="idNumber"
              dependencies={['idType']}
              rules={[
                { required: true, message: 'Please enter your Identification ID!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    const idType = getFieldValue('idType');
                    if (idType === 'aadhar' && (!value || !/^\d{14}$/.test(value))) {
                      return Promise.reject(
                        new Error('Please enter a valid 14-digit Aadhar number!')
                      );
                    }
                    return Promise.resolve();
                  },
                }),
              ]}
            >
              <Input placeholder="Enter ID Number" />
            </Form.Item>
          </Col>

          {/* Address */}
          <Col span={24}>
            <Form.Item
              label="Address"
              name="address"
              rules={[{ required: true, message: 'Please enter your Address' }]}
            >
              <textarea className="w-full" placeholder="Enter Address"></textarea>
            </Form.Item>
          </Col>

          {/* Password */}
          <Col span={6}>
            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: 'Please enter your password!' }]}
            >
              <Input.Password placeholder="Enter Password" />
            </Form.Item>
          </Col>

          {/* Confirm Password */}
          <Col span={6}>
            <Form.Item
              label="Confirm Password"
              name="confirmPassword"
              dependencies={['password']}
              rules={[
                { required: true, message: 'Please confirm your password!' },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match!'));
                  },
                }),
              ]}
            >
              <Input.Password placeholder="Confirm Password" />
            </Form.Item>
          </Col>
        </Row>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button className="primary-contained btn" type="submit">
            Submit
          </button>
        </div>
      </Form>
    </div>
  );
}

export default Index;
