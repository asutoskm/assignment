import React from 'react';
import classNames from 'classnames';

interface ChipProps {
    className?: string;
    text: string;
    type?: 'success' | 'failure';
}

const Chip: React.FC<ChipProps> = ({ className, text, type = 'success' }) => {

    const chipClass = classNames(
        'inline-flex items-center gap-2 px-2 py-0.5 rounded-full ',
        {
            'text-negative-400 bg-negative-400/20': type === 'failure',
            'text-positive-400 bg-positive-400/20': type === 'success',
        },
        className,
    );

    return (
        <div className={chipClass}>
            {text}
        </div>
    );
};

export default Chip;
