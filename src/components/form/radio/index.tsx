import { Radio as AntRadio } from 'antd'
import { RadioProps as AntRadioProps } from 'antd/es/radio'
import { useState, useEffect } from 'react';
import { Control } from 'react-hook-form';
import { Container } from './styles';

interface OptionProps {
  label: string;
  value: string|number|boolean;
  disabled?: boolean;
}

interface RadioProps extends AntRadioProps {
  control: Control;
  name: string;
  options: OptionProps[];
}

export const Radio: React.FC<RadioProps> = ({control, name, options, ...props}) => {
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

  return (
    <Container className="ll-radio">
    {options.map(({value, label, disabled})=>(
      <AntRadio
      key={value.toString()}
          name={name}
          value={value}
          disabled={disabled}
          checked={inputValue === value}
          onChange={(e)=>setInputValue(e.target.value)}
          aria-label={name}
          {...props}
        >
          {label}
        </AntRadio>
      ))}
    </Container>
  );
};
