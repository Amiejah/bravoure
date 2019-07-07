import React from 'react';

const SidebarIcon = ({ handleClick, isOpen }) => {
  return (
    <span onClick={handleClick}>
      {isOpen ? 'open' : 'close'}
    </span>
  )
}

export default SidebarIcon;