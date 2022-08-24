import { DotsVerticalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import { CategoryType } from '../../typings';
import { viewFormat } from './../../utils/ViewsFormat';

function Category({ name, views, image, tags }: CategoryType) {
    return (
        <Link href={`/directory/game/${name}`}>
            <div className="px-1 mb-4">
                <div className="relative group">
                    <div className="group-hover:-translate-y-[6px] group-hover:translate-x-[6px] transition relative z-10 leading-[0]">
                        <Image
                            src={image}
                            width={'285'}
                            height={'380'}
                            objectFit="fill"
                            alt=""
                            className="cursor-pointer"
                        />
                    </div>
                    <div className="bg-[#9147ff] absolute top-0 right-0 bottom-0 left-0 z-0">
                        <div className="top-corner"></div>
                        <div className="bottom-corner"></div>
                    </div>
                </div>
                <div className="flex justify-between mt-1">
                    <h3 className="color-text font-bold text-sm cursor-pointer hover:primary-color flex items-center leading-[0] truncate">
                        {name}
                    </h3>
                    <div className="flex items-center rounded-sm hover:bg-neutral-700 p-1 cursor-pointer">
                        <DotsVerticalIcon className="h-4 w-4 color-text " />
                    </div>
                </div>
                <div className="text-gray-500 cursor-pointer hover:primary-color mb-1 text-sm">
                    {viewFormat(views)} viewers
                </div>
                <div className="!mt-1.5 flex space-x-2 truncate">
                    {tags.map(tag => (
                        <div
                            key={`${tag.id} ${tag.name}`}
                            className="rounded-full  bg-neutral-700 w-fit px-3 text-gray-300 font-semibold cursor-pointer leading-none py-1 text-xs hover:bg-neutral-600"
                        >
                            {tag.name}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    );
}

export default Category;
