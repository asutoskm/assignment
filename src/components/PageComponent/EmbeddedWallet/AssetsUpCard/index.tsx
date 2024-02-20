import React from 'react';
import Image from 'next/image';
import Chip from '@/components/Common/Chip';
import TertiaryButton from '@/components/Common/Button/TertiaryButton';
import {
  ASSETS_UP_TEXT,
  ASSETS_UP_PERCENTAGE,
  ASSETS_VALUE,
  BUY_BUTTON_TEXT,
  SEND_BUTTON_TEXT,
  CARD_BACKGROUND_IMAGE,
  CART_GEOMETRIC_IMAGE,
  REFRESH_ICON_IMAGE,
  BUY_ICON_IMAGE,
  SEND_ICON_IMAGE
} from '@/constants/embeddedWallet/constant';

type Asset = {
  // Define the Asset type properties here
};

const AssetsUpCard: React.FC<Asset> = (props: Asset) => {
    const handleOnBuyClick = () => {
        console.log("hello")
    }
    return (
        <div className='px-6'>
            <div className="p-4 relative flex flex-col gap-6 border rounded-xl border-solid border-light-border overflow-hidden">
                <Image src={CARD_BACKGROUND_IMAGE} alt='Card Background' title='Card Background' layout='fill' objectFit='cover' className='z-0' />
                <Image src={CART_GEOMETRIC_IMAGE} alt='Cart Geometric' title='Cart Geometric' layout='fill' objectFit='cover' className='z-0' />
                <div className="flex flex-col gap-1 z-10">
                    <div className='gap-[7px] flex items-center'>
                        <p className='text-alpha-light8/70 text-center text-base not-italic font-semibold leading-[100%]'>
                            {ASSETS_UP_TEXT}
                        </p>
                        <Chip text={ASSETS_UP_PERCENTAGE} />
                    </div>
                    <div className="flex gap-2 items-center">
                        <p className='text-white text-center text-4xl not-italic font-semibold leading-[120%]'>
                            {ASSETS_VALUE}
                        </p>
                        <div className='hover:common-hover p-[7px] rounded-xl'>
                            <Image src={REFRESH_ICON_IMAGE} alt='Refresh' title='Refresh' height={18} width={18} />
                        </div>
                    </div>
                </div>
                <div className='flex gap-3.5'>
                    <TertiaryButton onClick={handleOnBuyClick} className='flex !gap-2 flex-1 items-center justify-center'>
                        <Image src={BUY_ICON_IMAGE} alt='Buy' title='Buy' width={24} height={24} />
                        <p className='text-light-primary text-center text-base not-italic font-semibold leading-[120%]'>{BUY_BUTTON_TEXT}</p>
                    </TertiaryButton>
                    <TertiaryButton onClick={handleOnBuyClick} className='flex !gap-2 flex-1 items-center justify-center'>
                        <Image src={SEND_ICON_IMAGE} alt='Send' title='Send' width={24} height={24} />
                        <p className='text-light-primary text-center text-base not-italic font-semibold leading-[120%]'>{SEND_BUTTON_TEXT}</p>
                    </TertiaryButton>
                </div>
            </div>
        </div>
    );
};

export default AssetsUpCard;