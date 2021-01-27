import { Input as AntInput } from 'antd'
import { InputProps as AntInputProps } from 'antd/es/input'
import { useState, useEffect } from 'react';
import { Control } from 'react-hook-form';
import { Container } from './styles';
import classnames from 'classnames';

interface InputProps extends AntInputProps {
  control: Control;
  name: string;
}

export const Input: React.FC<InputProps> = ({control, name, disabled = false, ...props}) => {
  const [hasFocus, setHasFocus] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(control.defaultValuesRef.current[name])
  const {setValue, register} =  control;

  useEffect(()=>{
    register(name);
    if (control.defaultValuesRef.current[name] !== undefined ) {
      setInputValue(control.defaultValuesRef.current[name]);
    }
  }, [control])

  useEffect(()=>{
    setValue(name, inputValue);
  }, [inputValue])

  const classes = classnames('ll-input', {'ll-input-focused': hasFocus});

  return(
    <Container hasFocus={hasFocus} className={classes} disabled={disabled}>
      <AntInput
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
