import Image from 'next/image';
import { viewFormat } from './../../utils/ViewsFormat';
import { ViewCompactFormat } from './../../utils/ViewsCompactFormat';

interface Props {
    name: string;
    image: string;
    category: string | null;
    viewers: number | null;
    status: boolean;
    newVideos: number | null;
}

function Channel({ name, image, category, viewers, status, newVideos }: Props) {
    return (
        <div className="flex justify-between color-text items-center p-2 cursor-pointer hover:bg-[rgba(255,255,255,0.04)]">
            <div className="flex space-x-2 items-center">
                <Image
                    src={image}
                    width={'30'}
                    height={'30'}
                    alt=""
                    className={`rounded-full ${!status && 'saturate-0'}`}
                />
                <div className="flex flex-col gap-[2px]">
                    <p className="font-semibold text-sm leading-none">{name}</p>
                    <p className="font-normal text-sm text-gray-400 leading-none">
                        {category ? category : ''}
                        {!status && `${newVideos} new videos`}
                    </p>
                </div>
            </div>
            <div className="flex items-center space-x-1">
                {status ? (
                    <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 rounded-full bg-red-600" />
                        <h4 className="text-[13px]">
                            {ViewCompactFormat(viewers)}
                        </h4>
                    </div>
                ) : (
                    <p className="text-sm">Offline</p>
                )}
            </div>
        </div>
    );
}

export default Channel;
