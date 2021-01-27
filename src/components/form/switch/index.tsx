import { Switch as AntSwitch } from 'antd'
import { SwitchProps as AntSwitchProps } from 'antd/es/switch'
import { useState, useEffect } from 'react';
import { Control } from 'react-hook-form';
import { Container } from './styles';

interface SwitchProps extends AntSwitchProps {
  control: Control;
  name: string;
  label: string;
}

export const Switch: React.FC<SwitchProps> = ({control, name, label, ...props}) => {
  const [inputValue, setInputValue] = useState<boolean>(control.defaultValuesRef.current[name])
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

  return(
    <Container>
      <AntSwitch
        onChange={()=>setInputValue(!inputValue)}
        checked={inputValue}
        aria-label={name}
        {...props}
      />
    </Container>
  );
};
