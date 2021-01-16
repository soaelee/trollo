import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, Button, Space } from 'antd';
import useInput from '../hooks/useInput';
import styled from 'styled-components';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { loginRequestAction } from '../reducers/user';

const FormContainer = styled(Form)`
  margin: 0 auto;
  width: 350px;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputStyle = styled(Input)`
  margin-bottom: 1em;
  height: 3.2em;
  padding: 0 1.3em;
  border-radius: 4px;
`;

const Title = styled.h2`
  font-weight: bold;
  color: #5e6c84;
`;
const Login = ({history}) => {

  const email = useInput("");
  const password = useInput("");

  const dispatch = useDispatch();

  const { loginLoading, loginDone, loginError } = useSelector( state => state.user);

  useEffect(() => {
    if(loginDone) {
      history.replace("/");
    }
    if(loginError) {
      alert(loginError);
    }
  }, [loginDone, loginError]);

  const onLogin = useCallback(() => {
    dispatch(loginRequestAction(email.value));
    history.push('/');
  }, [email.value, password.value]);

  return (
    <FormContainer onFinish={onLogin}>
      <Title>Log in to Troller</Title>
      <InputStyle
        placeholder="input email" 
        prefix={<UserOutlined />} 
        value={email.value}
        onChange={email.onChange}  
      />
      <InputStyle
        type="password"
        placeholder="input password"
        prefix={<LockOutlined />}
        value={password.value}
        onChange={password.onChange}  
      />
      <Space>
        <a>회원가입</a>
      <Button 
        type="primary" 
        htmlType="submit"
        loading={loginLoading}
      >
        로그인
      </Button>
      </Space>
    </FormContainer>
  )
}

export default Login
