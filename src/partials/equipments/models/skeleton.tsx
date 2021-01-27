import React from 'react';
import { Skeleton as AntSkeleton, Space  } from 'antd'
import { Span } from 'components/layout/span';

export const Skeleton: React.FC = () => {
  return(
    <>
      <AntSkeleton title={{width: 250}} paragraph={false} active={true} round={true} />
      <br />
      <AntSkeleton title={false} paragraph={{rows: 5}} active={true} round={true} />
      <Span dir="horizontal">
        <Space align="end" style={{width: '100%'}}>
          <AntSkeleton.Button active={true} />
          <AntSkeleton.Button active={true} />
        </Space>
      </Span>  
    </>
  );
}