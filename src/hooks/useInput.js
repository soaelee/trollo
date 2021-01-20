import { useState } from 'react';

const useInput = (initialState, validator ) => {
  const [ value, setValue ] = useState(initialState);

  const onChange = (e) => {
    const { target: {value} } = e;
    
    let isPossible = true;

    if(typeof validator === 'function'){
      isPossible = validator(value);
    }

    if(isPossible) {
      setValue(value);
    }
  };

  return { value, onChange };
}

export default useInput;