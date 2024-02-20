import { HEADER_TEXT } from '@/constants/onBoarding/constant';
import React from 'react';



const CreateNameHeader: React.FC = () => {
    return (
        <div className='w-full py-2'>
            <p className='text-left text-[18px] not-italic font-semibold leading-[120%] text-light-primary/70' style={{ mixBlendMode: 'difference' }}>
                {HEADER_TEXT}
            </p>
        </div>
    );
};

export default CreateNameHeader;