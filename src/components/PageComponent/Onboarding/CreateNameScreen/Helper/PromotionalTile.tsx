import React from 'react';
import gridAnimation from '@/constants/lottie/emojiiconAnimation.json'
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { PROMOTIONAL_MESSAGE, PROMOTIONAL_MESSAGE_HIGHLIGHT } from '@/constants/onBoarding/constant';

const Lottie = dynamic(() => import('lottie-react').then((mod) => mod), {
    ssr: false,
    loading: () => <Image src='/images/emoji.jpg' alt='emoji' className='h-8 w-8 transition-all' width={32} height={32} />,
});



const PromotionalTile: React.FC = () => {
    return (
        <div className='border border-light-primary/[0.08] rounded-xl flex gap-2.5 p-4 group relative overflow-hidden transition-all'>

            <div className='w-8 h-8 flex justify-center items-center transition-all'>
                <Lottie
                    animationData={gridAnimation}
                    className='w-8 h-8'
                    height={'32px'}
                    width={'32px'}
                    loop={true}
                    autoPlay={false} />
            </div>

            <div className='text-xs not-italic font-normal leading-[normal] text-light-primary/30'>
                {PROMOTIONAL_MESSAGE.split(PROMOTIONAL_MESSAGE_HIGHLIGHT).map((part, index) => (
                    index < PROMOTIONAL_MESSAGE.split(PROMOTIONAL_MESSAGE_HIGHLIGHT).length - 1 ? (
                        <React.Fragment key={index}>
                            {part}
                            <span className='font-bold text-light-primary/70'>{PROMOTIONAL_MESSAGE_HIGHLIGHT}</span>
                        </React.Fragment>
                    ) : part
                ))}
            </div>

            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-40 animate-shine " />
        </div>
    );
};

export default PromotionalTile;