import { HTMLAttributes, useState, useEffect } from "react";
import { Container } from './styles'

interface FormControlProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  name?: string;
  error?: string;
}

export const FormControl: React.FC<FormControlProps> = ({children, label, name, error, ...props}) => {
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() =>{
    setHasError(!!error)
  },[error])

  return(
    <Container hasError={hasError} {...props} className="ll-form-control">
      {label && <label htmlFor={name}>{label}</label>}
      {children}
      {error && <span className="ll-form-conrtol-error">{error}</span>}
    </Container>
  );
};
