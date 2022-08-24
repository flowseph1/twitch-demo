import Image from 'next/image';
import React, { useState } from 'react';

import HeaderInput from './HeaderInput';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const recentSearches = ['Ibai', 'Auron Play', 'Juan Guarnizo'];

function Header() {
    return (
        <div className="flex justify-between bg-color shadow-[0_1px_2px_rgba(0,0,0,0.9),_0_0_2px_rgba(0,0,0,0.9)] h-[50px] z-50">
            <HeaderLeft />
            <div className=" flex-1 items-center justify-center hidden lg:flex ">
                <HeaderInput recentSearches={recentSearches} />
            </div>
            <HeaderRight />
        </div>
    );
}

export default Header;
