import { useSelector } from 'react-redux';
import { toggleSidebarValue } from '../../slices/sidebarSlice';
import Channel from './Channel';

const recommendedChannels = [
    {
        name: 'ElSpreen',
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1c14619b-d930-48d4-bd17-91784c8bde0f-profile_image-70x70.jpeg',
        category: 'Minecraft',
        viewers: 114000,
        status: true,
        newVideos: null,
    },
    {
        name: 'ElMariana',
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/0107210e-a98c-409d-92a6-1caf70bb3953-profile_image-70x70.png',
        category: 'Minecraft',
        viewers: 64800,
        status: true,
        newVideos: null,
    },
    {
        name: 'thedanirep',
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/thedanirep-profile_image-8cfc87b583b4290a-70x70.png',
        category: 'Minecraft',
        viewers: 1900,
        status: true,
        newVideos: null,
    },
    {
        name: 'IamCristinini',
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/9fe6686f-d1a0-41a5-9962-5c73997d3dca-profile_image-70x70.png',
        category: 'Minecraft',
        viewers: 4800,
        status: true,
        newVideos: null,
    },
];

function RecommendedChannels() {
    const toggleValue = useSelector(toggleSidebarValue);

    return (
        <div className={`${toggleValue ? 'mt-2' : 'mt-0'}`}>
            <div
                className={`text-sm color-text font-semibold uppercase p-2 ${
                    !toggleValue && 'hidden'
                }`}
            >
                RECOMMENDED CHANNELS
            </div>
            <div className="mb-2">
                {recommendedChannels.map(channel => (
                    <Channel
                        key={channel.name}
                        image={channel.image}
                        name={channel.name}
                        category={channel.category}
                        viewers={channel.viewers}
                        status={channel.status}
                        newVideos={channel.newVideos}
                    />
                ))}
            </div>
            <p
                className={`text-[12px] hover:underline cursor-pointer primary-color hover:!text-[#a970ff] px-2 ${
                    !toggleValue && 'hidden'
                }`}
            >
                Show more
            </p>
        </div>
    );
}

export default RecommendedChannels;
