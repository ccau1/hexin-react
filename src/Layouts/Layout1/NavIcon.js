import React from 'react';

const NavIcon = ({ size = 20, icon: IconComponent }) => (
  <IconComponent size={size} style={{ marginRight: '5px' }} />
);

export default NavIcon;
