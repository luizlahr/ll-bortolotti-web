import {Row as AntRow}from 'antd'
import {RowProps} from 'antd/es/row'
import { GridStyles } from './styles';

const Row: React.FC<RowProps> = ({children, ...props}) => {
  return(
    <>
      <AntRow gutter={16} {...props}>
        {children}
      </AntRow>
      <GridStyles />
    </>
  );
};

export default Row;
