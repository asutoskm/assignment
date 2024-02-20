import React from 'react';
import classNames from 'classnames';


type Props = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const PrimaryButton: React.FC<Props> = ({ className, onClick = () => {}, children }) => {
  return (
    <button className={classNames(`
     bg-button-gradient
     ring-2 ring-transparent
     hover:ring-2 hover:ring-button-primary hover:ring-inset
     px-3 py-[8.6px] rounded-2xl 
     hover:bg-button-gradient-hover cursor-pointer
     text-base not-italic font-semibold leading-6
     text-light-primary
     font-neue-haas-grotesk
     `, className)}
     onClick={onClick}  
     >
      {children}
    </button>
  )
}

export default PrimaryButton;