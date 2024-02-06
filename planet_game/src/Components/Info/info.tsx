import React from 'react';

import './info.css';

interface Props {
  children?: React.ReactNode;
}

const Info: React.FC<Props> = ({ children}) => {
  return (
    <p>
      {children}
    </p>
  );
};

export default Info;
