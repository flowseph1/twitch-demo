import { DotsVerticalIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { viewFormat } from './../../utils/ViewsFormat';

interface Props {
    title: string;
    views: number;
    image: string;
    tags: string[];
}

function Category({ title, views, image, tags }: Props) {
    return (
        <div className="space-y-1">
            <Image
                src={image}
                width={'285'}
                height={'380'}
                objectFit="cover"
                alt=""
                className="cursor-pointer"
            />
            <div className="flex justify-between">
                <h3 className="color-text font-bold text-lg cursor-pointer hover:primary-color leading-none flex items-center">
                    {title}
                </h3>
                <div className="flex items-center rounded-sm hover:bg-neutral-700 p-1 cursor-pointer">
                    <DotsVerticalIcon className="h-5 w-5 color-text " />
                </div>
            </div>
            <div className="text-gray-500 cursor-pointer hover:primary-color mb-1">
                {viewFormat(views)} viewers
            </div>
            <div>
                {tags.map(tag => (
                    <div
                        key={tag}
                        className="rounded-full bg-neutral-700 w-fit px-4 text-gray-300 font-semibold cursor-pointer hover:bg-neutral-600 leading-none py-1"
                    >
                        {tag}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Category;
