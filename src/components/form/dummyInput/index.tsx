import { Input as AntInput } from 'antd'
import { InputProps as AntInputProps } from 'antd/es/input'
import { useState, useEffect } from 'react';
import { Control } from 'react-hook-form';
import { Container } from './styles';
import classnames from 'classnames';

interface InputProps extends AntInputProps {
  name: string;
  value: string | number;
}

export const DummyInput: React.FC<InputProps> = ({value, name, disabled = false, ...props}) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string|number>()

  useEffect(()=>{
    setInputValue(value);
  },[value])

  const classes = classnames('ll-input-dummy', {'ll-input-dummy-focused': hasFocus});

  return(
    <Container hasFocus={hasFocus} className={classes} disabled={disabled}>
      <AntInput
        disabled={disabled}
        name={name}
        value={inputValue}
        onChange={(e)=>setInputValue(e.target.value)}
        onFocus={()=>setHasFocus(true)}
        onBlur={()=>setHasFocus(false)}
        aria-label={name}
        {...props}
      />
    </Container>
  );
};
