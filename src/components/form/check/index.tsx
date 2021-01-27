import { Checkbox as AntCheck } from 'antd'
import { CheckboxProps as AntCheckProps } from 'antd/es/checkbox'
import { useState, useEffect } from 'react';
import { Control } from 'react-hook-form';

import { Container } from './styles'

interface CheckProps extends AntCheckProps {
  control: Control;
  name: string;
  label: string;
}

export const Check: React.FC<CheckProps> = ({control, name, label, ...props}) => {
  const [inputValue, setInputValue] = useState<boolean>(control.defaultValuesRef.current[name])
  const {setValue, register} =  control;

  useEffect(()=>{
    register(name);
  }, [control])

  useEffect(()=>{
    setValue(name, inputValue);
  }, [inputValue])

  return(
    <Container>
      <AntCheck
        name={name}
        onChange={(e)=>setInputValue(!inputValue)}
        checked={inputValue}
        value={props.value}
        {...props}
      >
        {label}
      </AntCheck>
    </Container>
  );
};
