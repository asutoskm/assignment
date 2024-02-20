import React from 'react';
import Image from 'next/image';
import PrimaryButton from '@/components/Common/Button/PrimaryButton';
import { CONTINUE_WITH_GOOGLE } from '@/constants/onBoarding/constant';

type GoogleLoginProps = {
    onClick: () => void;
};

const GoogleLogin: React.FC<GoogleLoginProps> = ({ onClick }) => {
    return (
        <PrimaryButton className='flex gap-3 w-full items-center' onClick={onClick}>
            <Image src={'images/google-icon.svg'} alt='google' height={36} width={36} className='h-9 w-9 rounded-full' />
            <p className='text-center not-italic font-semibold leading-[120%] truncates' title={CONTINUE_WITH_GOOGLE}>{CONTINUE_WITH_GOOGLE}</p>
        </PrimaryButton>
    );
};

export default GoogleLogin;