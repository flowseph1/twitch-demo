import { RefreshIcon, XIcon } from '@heroicons/react/solid';
import { SearchIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';

interface Props {
    recentSearches: string[];
}

function HeaderInput({ recentSearches }: Props) {
    const [isInputClicked, setIsInputClicked] = useState(false);

    return (
        <div className="w-[400px] p-2 relative ">
            <div
                className={`absolute pb-5 top-0 right-0 left-0 shadow-[0_0_5px_1px_rgba(0,0,0,0.5)] rounded-md bg-color z-0  ${
                    isInputClicked ? 'block' : 'hidden'
                }`}
            >
                <div className="pt-16 space-y-2">
                    {recentSearches.map(recent => (
                        <div
                            key={recent}
                            className=" flex items-center justify-between px-1"
                        >
                            <div className="flex flex-1 items-center cursor-pointer">
                                <RefreshIcon className="h-5 w-5 primary-color ml-2" />
                                <span className="primary-color px-3 text-sm">
                                    {recent}
                                </span>
                            </div>
                            <div className="p-1 hover:bg-neutral-600 rounded-[4px] cursor-pointer mr-2">
                                <XIcon className="h-5 w-5 color-text" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex w-full h-17 z-50 relative">
                <div className="flex-1 flex items-center bg-neutral-600 rounded-tl-md rounded-bl-md color-text hover:shadow-[inset_0_0_0_2px_rgba(255,255,255,0.15)] transition leading-[0]">
                    <input
                        type="text"
                        placeholder="Search"
                        onFocus={() => setIsInputClicked(true)}
                        onBlur={() => setIsInputClicked(false)}
                        className="bg-transparent h-full w-full outline-none py-2 px-3 placeholder:text-neutral-300 placeholder:font-medium text-sm
                         focus:bg-black  rounded-tl-md rounded-bl-md focus:shadow-[inset_0_0_0_2px_#bf94ff] transition"
                    />
                </div>
                <div className="bg-neutral-700 flex items-center rounded-tr-md rounded-br-md color-text px-1.5 border-l-[1px] border-[#18181b] hover:bg-neutral-600">
                    <SearchIcon className="h-5 w-5 color-text" />
                </div>
            </div>
        </div>
    );
}

export default HeaderInput;
