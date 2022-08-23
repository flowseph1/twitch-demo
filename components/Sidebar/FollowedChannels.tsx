import Channel from './Channel';

const followedChannels = [
    {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/74586414-e27b-4347-89c5-109e42ac3e1d-profile_image-70x70.png',
        name: 'juanguarnizo',
        category: 'Minecraft',
        viewers: 48100,
        status: true,
        newVideos: null,
    },
    {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/1ca90bf0-bb5e-4875-9b68-33daf4e93f12-profile_image-70x70.png',
        name: 'polispol1',
        category: 'Minecraft',
        viewers: 15952,
        status: true,
        newVideos: null,
    },
    {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/0020626c-586e-4863-9124-8561fa7ffc33-profile_image-70x70.png',
        name: 'aXoZer',
        category: 'Minecraft',
        newVideos: 6,
        viewers: 3520,
        status: true,
    },
    {
        image: 'https://static-cdn.jtvnw.net/jtv_user_pictures/fc589bdf-5f99-48d3-bb97-2859c80ea2ee-profile_image-70x70.png',
        name: 'Castaway',
        category: null,
        viewers: 437,
        status: false,
        newVideos: 5,
    },
];

function FollowedChannels() {
    return (
        <div className="flex flex-col mt-1 ">
            <div className="mb-2">
                {followedChannels.map(channel => (
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
            <p className="text-[12px] hover:underline cursor-pointer primary-color hover:!text-[#a970ff] px-2">
                Show more
            </p>
        </div>
    );
}

export default FollowedChannels;
