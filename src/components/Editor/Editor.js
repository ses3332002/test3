import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Select, Form, Input, Button, message } from 'antd';
import { editUser } from '../../data/usersAPI';
import { AppContext } from '../App/App';
import './Editor.css';

const { Option } = Select;

export default function Editor() {
  let [isUpdated, setIsUpdated] = useState(false);
  let { curUser, setCurUser } = useContext(AppContext);
  const [form] = Form.useForm();
  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
  };

  function submitForm(value) {
    editUser({
      id: curUser.id,
      name: value.username,
      email: value.email,
      gender: value.gender,
    }).then(response => {
      if (response.status === 200) {
        setIsUpdated(true);
        setCurUser(null);
        message.success('User record was updated');
      }
      return response.json();
    });
  }

  if (curUser === null) {
    return <h2>No data to edit</h2>;
  } else if (isUpdated) {
    return <Navigate replace to="/users" />;
  } else {
    return (
      <Form
        style={{ width: '90vw', margin: 'auto' }}
        {...formItemLayout}
        form={form}
        name="basic"
        initialValues={{
          username: curUser.name,
          email: curUser.email,
          gender: curUser.gender,
        }}
        onFinish={submitForm}
        requiredMark={false}
      >
        <h2>Please, update user</h2>
        <Form.Item
          label="Username"
          name="username"
          shouldUpdate={true}
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input style={{ width: 300 }} />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          shouldUpdate={true}
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input style={{ width: 320 }} />
        </Form.Item>
        <Form.Item
          label="Gender"
          name="gender"
          shouldUpdate={true}
          rules={[
            {
              required: true,
              message: 'Please input gender!',
            },
          ]}
        >
          <Select style={{ width: 120 }}>
            <Option value="male">male</Option>
            <Option value="female">female</Option>
          </Select>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
