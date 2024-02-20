import React from 'react';
import classNames from 'classnames';


type Props = {
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const SecondaryButton: React.FC<Props> = ({ className, onClick = () => {}, children }) => {
  return (
    <button className={classNames(`
    bg-alpha-light8/[0.08]
    px-3 py-[8.6px] rounded-2xl 
    text-base not-italic font-semibold leading-6 text-light-primary
    hover:shadow-box-shadowbutton
    font-neue-haas-grotesk
    `, className)}
    
    onClick={onClick}  
    >
      {children}
    </button>
  )
}

export default SecondaryButton;