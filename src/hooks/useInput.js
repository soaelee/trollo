import { useState } from 'react';

const useInput = (initialState, validator ) => {
  const [ value, setValue ] = useState(initialState);

  const onChange = (e) => {
    const { target: {value} } = e;
    
    let isPossible = true;

    if(typeof validator === 'function'){
      isPossible = validator(value).res;
    }

    if(isPossible) {
      setValue(value);
    } else {
      return alert(validator(value).err);
    }
  };

  return { value, onChange };
}

export default useInput;