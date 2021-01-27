import {Col as AntCol}from 'antd'
import {ColProps} from 'antd/es/col'

const Col: React.FC<ColProps> = ({children, ...props}) => {
  return(
    <AntCol {...props}>
      {children}
    </AntCol>
  );
};

export default Col;
