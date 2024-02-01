import { ReactNode } from 'react';

const CentredVertical = ({ children }: { children?: ReactNode }) => {
  return <div style={{ margin: '0', height: '100%' }}>{children}</div>;
};

export default CentredVertical;
