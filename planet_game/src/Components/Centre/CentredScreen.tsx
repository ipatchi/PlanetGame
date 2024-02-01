import { ReactNode } from 'react';

const CentredScreen = ({ children }: { children?: ReactNode }) => {
  return (
    <>
      <div style={{ margin: 'auto', width: '50%', textAlign: 'center' }}>
        {children}
      </div>
    </>
  );
};

export default CentredScreen;
