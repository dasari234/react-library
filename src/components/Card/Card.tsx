import React from 'react';
import { CardProps } from './types';

const Card: React.FC<CardProps> = ({
  children,
  title,
  actions,
  padding = 'md',
  className = '',
  ...props
}) => {
  const paddingClasses = {
    none: '',
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  };

  const classes = [
    'bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden',
    paddingClasses[padding],
    className
  ].join(' ');

  return (
    <div className={classes} {...props}>
      {(title || actions) && (
        <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
          {title && (
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          )}
          {actions && (
            <div className="flex items-center space-x-2">{actions}</div>
          )}
        </div>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};

export default Card;