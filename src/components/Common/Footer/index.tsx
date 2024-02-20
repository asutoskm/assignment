import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className='p-2.5 flex gap-2.5 items-center justify-center'>
      <Image src={'/icons/logo-transparent.svg'} alt="Logo" width={20} height={20} />
      <p className='text-center text-sm not-italic font-semibold leading-[100%] text-text-light-footer'>Powered by Tria</p>
    </div>
  );
};

export default Footer;