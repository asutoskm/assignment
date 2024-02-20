import React, { FC, ChangeEvent } from 'react';
import Input from '@/components/Common/Input';
import PrimaryButton from '@/components/Common/Button/PrimaryButton';
import { BUTTON_TEXT_CONTENT, DEFAULT_RIGHT_PLACEHOLDER, DEFAULT_USERNAME_PLACEHOLDER } from '@/constants/onBoarding/constant';

type Props = {
    inputValue: string;
    onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onCreateName: () => void;
};



const CreateNameForm: FC<Props> = ({ inputValue, onInputChange, onCreateName }) => {
    return (
        <div className='flex gap-2 w-full'>
            <Input
                type="text"
                name="createUser"
                value={inputValue}
                outerClassName='flex-1'
                placeholder={DEFAULT_USERNAME_PLACEHOLDER}
                onChange={onInputChange}
                rightPlaceholder={DEFAULT_RIGHT_PLACEHOLDER}
            />
            <PrimaryButton onClick={onCreateName} className={'w-[110px]'}>
                <p className='text-base not-italic font-semibold leading-6'>{BUTTON_TEXT_CONTENT}</p>
            </PrimaryButton>
        </div>
    );
};

export default CreateNameForm;