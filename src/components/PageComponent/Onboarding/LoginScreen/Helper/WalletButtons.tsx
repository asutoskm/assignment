import React from 'react';
import Image from 'next/image';
import SecondaryButton from '@/components/Common/Button/SecondaryButton';
import { WALLET_BUTTON_TEXT, IMAGE_PATHS } from '@/constants/onBoarding/constant';

interface WalletButtonProps {
    onMetaMaskClick: () => void;
    onWalletConnectClick: () => void;
}

const WalletButtons: React.FC<WalletButtonProps> = ({ onMetaMaskClick, onWalletConnectClick }) => {
    return (
        <div className='flex gap-3 w-full'>
            <SecondaryButton onClick={onMetaMaskClick} className='flex flex-1 items-center self-center gap-2 bg-transparent !border hover:!bg-light-secondary/5 !border-light-primary/[0.16]'>
                <Image src={IMAGE_PATHS.METAMASK_ICON} alt={WALLET_BUTTON_TEXT.METAMASK} height={28} width={28} className='h-7 w-7 rounded-full' />
                <p className='text-center text-base not-italic font-medium leading-[120%] text-white/80'>{WALLET_BUTTON_TEXT.METAMASK}</p>
            </SecondaryButton>
            <SecondaryButton onClick={onWalletConnectClick} className='flex flex-1 items-center self-center gap-2 bg-transparent !border hover:!bg-light-secondary/5 !border-light-primary/[0.16]'>
                <Image src={IMAGE_PATHS.WALLETCONNECT_ICON} alt={WALLET_BUTTON_TEXT.WALLET_CONNECT} height={28} width={28} className='h-7 w-7 rounded-full' />
                <p className='text-center text-base not-italic font-medium leading-[120%] text-white/80'>{WALLET_BUTTON_TEXT.WALLET_CONNECT}</p>
            </SecondaryButton>
        </div>
    );
};

export default WalletButtons;