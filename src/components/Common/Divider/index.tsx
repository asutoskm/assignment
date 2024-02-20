import React from 'react';

type DividerProps = {
    dividerText?: string;
};

const Divider: React.FC<DividerProps> = ({ dividerText }) => {
    return (
        <div className="flex items-center w-full my-3">
            <div className="flex-grow h-px bg-white/10"></div>
            {dividerText && (
                <span className="px-2 text-light-primary/30 text-center text-xs not-italic font-semibold leading-[120%] uppercase">
                    {dividerText}
                </span>
            )}
            <div className="flex-grow h-px bg-white/10"></div>
        </div>
    );
};

export default Divider;