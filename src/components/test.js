import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { testRequestAction } from '../reducers/user';

const Test = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(state => state.user);
  const clickHandler = () => {
    dispatch(testRequestAction());
  }
  return (
    <div>
      {user}
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default Test
