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
  
  const idValidator = (value) => {
    if(/^\s+$/.test(value)) {
      return {res: false, err: '공백은 입력할 수 없습니다.'};
    };
    if(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(value)) {
      return {res: false, err: '영문+숫자만 입력할 수 있습니다.'}
    };
    return {res: true};
  }; 

  const passwordValidator = (value) => {
    if(/^\s+$/.test(value)) {
      return {res: false, err: '공백은 입력할 수 없습니다.'};
    };
    return {res: true};
  };

  const id = useInput("", idValidator);
  const password = useInput("", passwordValidator);
  
  const dispatch = useDispatch();
  
  const onLogin = () => {
    if(!id.value) return alert('아이디를 입력해주세요.');
    if(!password.value) return alert('비밀번호를 입력해주세요.');
    dispatch(loginRequestAction(id.value));
    history.replace('/');
  };

  const { loginLoading, loginDone, loginError } = useSelector( state => state.user);

  useEffect(() => {
    if(loginDone) {
      history.replace("/b");
    }
    if(loginError) {
      alert(loginError);
    }
  }, [loginDone, loginError]);


  return (
    <FormContainer onFinish={onLogin}>
      <Title>Log in to Troller</Title>
      <InputStyle
        placeholder="input email" 
        prefix={<UserOutlined />} 
        {...id} 
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
