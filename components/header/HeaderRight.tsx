import React from 'react';
import { ChatAltIcon, InboxIcon, MailIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import avatar from '../../public/user-avatar.png';
import bits_icon from '../../public/bits-icon.svg';
import BitsIcon from './../../public/bits-icon';

function HeaderRight() {
    return (
        <div className="flex-1 flex items-center justify-end space-x-2">
            <div className="rounded-md p-1.5 hover:bg-neutral-700 cursor-pointer">
                <MailIcon className="h-5 w-5 color-text" />
            </div>
            <div className="rounded-md p-1.5 hover:bg-neutral-700 cursor-pointer">
                <InboxIcon className="h-5 w-5 color-text" />
            </div>
            <div className="rounded-md p-1.5 hover:bg-neutral-700 cursor-pointer">
                <ChatAltIcon className="h-5 w-5 color-text" />
            </div>
            <button className="flex items-center space-x-1 color-text py-1 px-2 bg-neutral-700 rounded-[4px] font-semibold hover:bg-neutral-600 cursor-pointer text-sm">
                <BitsIcon className="h-5 w-5" />
                <div className="leading-none flex items-center">Get Bits</div>
            </button>
            <div className="flex items-center pr-2 cursor-pointer">
                <Image
                    src={avatar}
                    width="30"
                    height="30"
                    alt=""
                    className="rounded-full"
                />
            </div>
        </div>
    );
}

export default HeaderRight;
