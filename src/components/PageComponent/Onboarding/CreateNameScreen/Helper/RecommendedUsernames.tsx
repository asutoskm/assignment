import React from 'react';
import SecondaryButton from '@/components/Common/Button/SecondaryButton';
import classNames from 'classnames';
import { RECOMMENDED_TEXT } from '@/constants/onBoarding/constant';

type RecommendedUsernamesProps = {
    usernames: string[];
    selectedUsername: string;
    onUsernameClick: (username: string) => void;
};

const RecommendedUsernames: React.FC<RecommendedUsernamesProps> = ({ usernames, selectedUsername, onUsernameClick }) => {
    return (
        <div className='flex flex-col w-full'>
            <div className='pt-2'>
                <p className='text-xs not-italic font-normal leading-[150%] text-left text-white/70'>{RECOMMENDED_TEXT}</p>
            </div>
            <div className='flex gap-2 flex-wrap py-3'>
                {usernames.map((username) => (
                    <SecondaryButton key={username} onClick={() => onUsernameClick(username)}
                    className={classNames('flex items-center justify-center self-center gap-2 text-light-primary/70 !py-2 !px-3', {
                        'bg-light-surface-125 !text-text-default': selectedUsername === username,
                        'bg-transparent !border hover:!bg-light-secondary/5 !border-light-primary/[0.16]': selectedUsername !== username
                    })}>
                        <p className='text-center text-sm not-italic font-normal leading-[120%]'>{username}</p>
                    </SecondaryButton>
                ))}
            </div>
        </div>
    );
};

export default RecommendedUsernames;