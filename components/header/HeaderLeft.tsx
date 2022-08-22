import { DotsVerticalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import logo from '../../public/TwitchGlitchPurple.png';

function HeaderLeft() {
    return (
        <div className="flex flex-1 items-center space-x-8  leading-none color-text">
            <div className="flex items-center justify-center px-3 cursor-pointer">
                <Image
                    src={logo}
                    width={25}
                    height={30}
                    objectFit={'contain'}
                    alt=""
                />
            </div>

            <div className="flex items-center h-full cursor-pointer border-b-4 border-[#18181b]">
                <h1 className="text-lg font-bold hover:primary-color py-2 leading-[0]">
                    Following
                </h1>
            </div>

            <div className="flex items-center h-full cursor-pointer border-b-4 border-[#18181b] active">
                <h1 className="text-lg font-bold hover:primary-color py-2 leading-[0]">
                    Discover
                </h1>
            </div>

            <div className="p-1 rounded-md hover:bg-neutral-700 cursor-pointer">
                <h1 className="text-2xl font-semibold leading-none">
                    <DotsVerticalIcon className="color-text h-5 w-5" />
                </h1>
            </div>
        </div>
    );
}

export default HeaderLeft;
