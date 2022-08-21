import React from 'react';
import { ChatAltIcon, InboxIcon, MailIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import avatar from '../../public/user-avatar.png';

function HeaderRight() {
    return (
        <div className="flex-1 flex items-center justify-end space-x-3">
            <div className="rounded-md p-2 hover:bg-neutral-700 cursor-pointer">
                <MailIcon className="h-6 w-6 color-text" />
            </div>
            <div className="rounded-md p-2 hover:bg-neutral-700 cursor-pointer">
                <InboxIcon className="h-6 w-6 color-text" />
            </div>
            <div className="rounded-md p-2 hover:bg-neutral-700 cursor-pointer">
                <ChatAltIcon className="h-6 w-6 color-text" />
            </div>
            <button className="color-text py-[6px] px-3 bg-neutral-700 rounded-md font-semibold hover:bg-neutral-600 cursor-pointer text-lg">
                Get Bits
            </button>
            <div className="flex items-center pr-4 cursor-pointer">
                <Image
                    src={avatar}
                    width="38"
                    height="38"
                    alt=""
                    className="rounded-full"
                />
            </div>
        </div>
    );
}

export default HeaderRight;
