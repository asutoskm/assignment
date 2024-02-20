import React from 'react';
import Image from 'next/image';
import SecondaryButton from '@/components/Common/Button/SecondaryButton';
import { CONTINUE_WITH_X } from '@/constants/onBoarding/constant';

interface TwitterLoginButtonProps {
    onClick: () => void;
}


const TwitterLoginButton: React.FC<TwitterLoginButtonProps> = ({ onClick }) => {
    return (
        <SecondaryButton className='flex gap-3 w-full items-center' onClick={onClick}>
            <Image src={'images/email-icon.svg'} alt='twitter' height={36} width={60} className='h-9' />
            <p className='text-left truncate' title={CONTINUE_WITH_X}>{CONTINUE_WITH_X}</p>
        </SecondaryButton>
    );
};

export default TwitterLoginButton;