import React from 'react';
import Image from 'next/image';
import SrinkSVG from './Helper/SrinkSVG';

export type SrinkState = 'open' | 'closed';

interface SrinkProps {
  className?: string;
  onClick?: () => void;
}

const Srink: React.FC<SrinkProps> = ({
  className,
  onClick
}) => {

  return (
    <div className={className}  onClick={onClick}>
      <SrinkSVG/>
    </div>
  );
};

export default Srink;
