import React from "react";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom"; // Assuming you're using react-router-dom for routing

const Register = () => {
    const submitHandler = (values) => {
        console.log(values)
    }
  return (
    <div className="register-page">
      <Form layout="vertical" onFinish={submitHandler}>
        <h1>Registration Page</h1>
        <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please input your email!' }]}>
          <Input type="email" />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input type="password" />
        </Form.Item>
        <div className="d-flex justify-content-between">
          <Link to="/login">Already registered? Click here to Login</Link>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit">Register</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Register;
