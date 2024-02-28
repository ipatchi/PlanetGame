//get rid of this and replace as div in learnscreen or add styling here

import React from 'react';

import './info.css';

interface Props {
  children?: React.ReactNode;
}

const Info: React.FC<Props> = ({ children}) => {
  return (
    <div className='info'>
      {children}
    </div>
  );
};

export default Info;
