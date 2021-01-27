import { Select as AntSelect } from 'antd'
import { SelectProps as AntSelectProps } from 'antd/es/select'
import { useState, useEffect } from 'react';
import { Control } from 'react-hook-form';
import { Container } from './styles';

interface SelectProps extends AntSelectProps<any> {
  control: Control;
  name: string;
  disabled?: boolean;
}

export const Select: React.FC<SelectProps> = ({control, name, disabled = false, ...props}) => {
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

  return(
    <Container hasFocus={hasFocus} className="ll-select" disabled={disabled}>
      <AntSelect
        value={inputValue}
        onChange={(e)=>setInputValue(e)}
        onFocus={()=>setHasFocus(true)}
        onBlur={()=>setHasFocus(false)}
        optionFilterProp={props.optionFilterProp ?? 'label'}
        showSearch={props.showSearch ?? true}
        aria-label={name}
        disabled={disabled}
        {...props}
      />
    </Container>
  );
};
