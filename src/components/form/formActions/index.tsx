import { HTMLAttributes } from 'react';
import {Container} from './styles';

type FormActionsProps = HTMLAttributes<HTMLDivElement>;

export const FormActions: React.FC<FormActionsProps> = ({children}) => {
  return(
    <Container>
      {children}
    </Container>
  );
};
