import { Suspense, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { supabase } from '../../services/supabaseClient';
import { toggleSidebarValue } from '../../slices/sidebarSlice';
import { SideBarChannel } from '../../typings';
import { useQuery } from 'react-query';
import Channel from './Channel';

const getRecommendedChannels = async () => {
    const { data, error } = await supabase.from('followed-channels').select('*');
    return data;
};

function FollowedChannels() {
    // State variables.
    // const [followedChannels, setFollowedChannels] = useState<SideBarChannel[] | null>(null);
    const toggleValue = useSelector(toggleSidebarValue);

    // Effects
    /* useEffect(() => {
        setFollowedChannels(data);
    }, [data]); */

    const { data, isLoading, isFetching, status } = useQuery('followed-channels', getRecommendedChannels, {
        staleTime: 0,
    });

    // Logs
    console.log();

    return (
        <div className="flex flex-col mt-1 ">
            <div className={`${toggleValue ? 'mb-2' : 'mb-0'}`}>
                {isLoading && <Loading />}
                {data?.map((channel: SideBarChannel) => (
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
                {/* <Loading /> */}
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

export default FollowedChannels;

const Loading = () => {
    return <div className="text-white flex justify-center items-center h-52">Loading...</div>;
};
