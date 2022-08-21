import { DotsVerticalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import logo from '../../public/TwitchGlitchPurple.png';

function HeaderLeft() {
    return (
        <div className="flex flex-1 items-center space-x-9  leading-none color-text">
            <div className="flex items-center justify-center px-3 cursor-pointer">
                <Image
                    src={logo}
                    width={35}
                    height={35}
                    objectFit={'contain'}
                    alt=""
                />
            </div>

            <div className="py-2 cursor-pointer border-b-4 border-[#18181b]">
                <h1 className="text-2xl font-semibold leading-none hover:primary-color py-2">
                    Following
                </h1>
            </div>

            <div className="py-2 cursor-pointer border-b-4 border-[#18181b] active">
                <h1 className="text-2xl font-semibold leading-none hover:primary-color py-2">
                    Discover
                </h1>
            </div>

            <div className="p-2 rounded-md hover:bg-neutral-700 cursor-pointer">
                <h1 className="text-2xl font-semibold leading-none">
                    <DotsVerticalIcon className="color-text h-6 w-6" />
                </h1>
            </div>
        </div>
    );
}

export default HeaderLeft;
