import React from 'react';
import Image from 'next/image';
import { 
   FOOTER_TEXT,
   LOGO_ALT_TEXT, 
   LOGO_IMAGE_PATH, 
   ARROW_IMAGE_PATH 
} from '@/constants/embeddedWallet/constant';

const Footer2: React.FC = () => {
  return (
    <div className='p-2.5 flex gap-2 items-center justify-center hover:bg-light-primary/[0.08] rounded-xl cursor-pointer'>
      <Image src={LOGO_IMAGE_PATH} alt={LOGO_ALT_TEXT} width={16} height={16} />
      <p className='text-center text-xs not-italic font-semibold leading-[100%] text-text-light-footer'>{FOOTER_TEXT}</p>
      <Image src={ARROW_IMAGE_PATH} alt={LOGO_ALT_TEXT} width={16} height={16} />
    </div>
  );
};

export default Footer2;