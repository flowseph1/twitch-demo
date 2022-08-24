import * as React from 'react';

const SideBarIcon = ({ color, width, height }) => (
    <svg viewBox="0 0 20 20" fill={color} width={width} height={height}>
        <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z" />
    </svg>
);

export default SideBarIcon;
