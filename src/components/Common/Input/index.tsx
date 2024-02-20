import classNames from 'classnames';
import React, { ChangeEvent, FC, useState } from 'react';

type InputProps = {
    type: string;
    name: string;
    value: string;
    placeholder?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    outerClassName?: string;
    className?: string;
    inputClassName?: string;
    rightPlaceholder?: string;
    error?: string;
};

const Input: FC<InputProps> = ({
    type,
    name,
    value,
    placeholder,
    onChange,
    className,
    inputClassName,
    rightPlaceholder,
    outerClassName,
    error
}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => setIsFocused(true);
    const handleBlur = () => setIsFocused(false);

    return (
        <div
            className={classNames(
                'flex rounded-xl p-[1px] relative',
                isFocused && !error && 'bg-input-highlight',
                error && 'bg-input-error',
                outerClassName
            )}
        >
            {/* added Background color as hardcoded value because there was no variable attaced to it */}
            <div className={classNames('flex flex-1 items-center gap-4 w-full px-4 py-3 rounded-xl bg-[#232323]', className)}>
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    className={classNames(
                        'outline-none ring-0 placeholder:text-light-primary/30 w-5 text-light-primary flex-1 bg-transparent caret-light-hightlight',
                        inputClassName
                    )}
                />
                <div className='text-light-primary/30'>
                    {rightPlaceholder}
                </div>
            </div>
        </div>
    );
};

export default Input;