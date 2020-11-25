import React from 'react'
import Menu from '../Menu/Menu'

function ContentWrapper({ children }) {
  return (
    <div>
      <Menu />
      { children }
    </div>
  );
}

export default ContentWrapper;
