import React, { useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { NAV_ITEMS } from '@/constants/embeddedWallet/constant';


const BottomNavbar = () => {
    const [activeItem, setActiveItem] = useState<string>('Home');

    return (
        <nav className='flex rounded-full p-2 w-fit border border-light-primary/[0.08] hover:bg-dark-surface-700 transition-all duration-200 group ease-extreme-bouncy'>
            {NAV_ITEMS.map((item, index) => {
                const isActive = activeItem === item.name;
                const isLastItem = NAV_ITEMS.length - 1 === index;
                const itemClasses = classNames(
                    'flex items-center justify-center rounded-full p-2 border -mr-1 transition-all cursor-pointer duration-300 group-hover:scale-[1.01]',
                    'ease-extreme-bouncy',
                    isActive ? 'bg-dark-surface-700 border-light-primary/[0.16]' : 'border-light-primary/[0.08] bg-background-card group-hover:bg-background-card',
                    isLastItem && 'mr-2'
                );
                const itemStyle = {
                    zIndex: NAV_ITEMS.length - index,
                    transformOrigin: 'left',
                    transform: isActive ? 'scaleX(1.05) scaleY(1.005)' : 'scaleX(1) scaleY(1)',
                };

                return (
                    <div
                        key={item.name}
                        className={itemClasses}
                        style={itemStyle}
                        onClick={() => setActiveItem(item.name)}
                    >    
                        <div className='w-8 h-8 flex items-center justify-center' >
                        <Image src={item.image} alt={item.name} width={24} height={24}/>
                        </div>
                        {isActive && (
                            <p className='text-white text-center text-base not-italic font-semibold leading-[120%] px-2'>{item.name}</p>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};

export default BottomNavbar;
