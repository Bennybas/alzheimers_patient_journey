import React from 'react';

export const Card = ({ className, children, ...props }) => (
  <div className={`rounded-lg shadow ${className}`} {...props}>
    {children}
  </div>
);