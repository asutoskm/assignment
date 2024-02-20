import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react';

interface TertiaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const TertiaryButton: React.FC<TertiaryButtonProps> = ({ children, onClick = () => {}, className }) => {
  return (
    <button
      onClick={onClick}      
      className={classNames(
      `p-2.5 
       relative z-10 
       overflow-hidden flex items-center
       justify-center gap-3 rounded-[7px] 
       text-center text-base not-italic font-semibold leading-[120%]
       block 
       ease-extreme-bouncy
       before:left-0 before:absolute 
       before:-z-[1] before:rounded-[7px] 
       before:w-[0%] before:top-0 
       before:bottom-0 before:transition 
       before:[transition-property:width] 
       before:[transition-duration:100ms] 
       hover:before:w-full 
       bg-background-default/50 text-white 
       hover:text-background-default 
       before:bg-button-gradient`,
        className
      )}
    >
      {children}
    </button>


  );
};

export default TertiaryButton;
