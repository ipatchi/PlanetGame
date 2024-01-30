import { ReactNode } from 'react';

function CentredScreen({children}: {children?: ReactNode}) {

  return (
    <>
    <div style={{ margin: 'auto', width:'50%', textAlign: 'center'}}>
      {children}
    </div>
    </>
  )
}

export default CentredScreen;