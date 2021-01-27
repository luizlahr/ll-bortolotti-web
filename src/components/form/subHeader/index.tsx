import {Container} from './styles';

export const SubHeader: React.FC = ({children}) => {
  return(
    <Container aria-label="subcabeçalho">
      {children}
    </Container>
  );
};
