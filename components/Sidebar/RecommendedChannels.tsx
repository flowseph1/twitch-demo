import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { supabase } from '../../services/supabaseClient';
import { toggleSidebarValue } from '../../slices/sidebarSlice';
import { SideBarChannel } from '../../typings';
import Channel from './Channel';

const getRecommendedChannels = async () => {
    const { data, error } = await supabase.from('recommended-channels').select('*');
    return data;
};

function RecommendedChannels() {
    // States variables
    // const [recommendedChannels, setRecommendedChannels] = useState<SideBarChannel[] | null>(null);

    // Redux States
    const toggleValue = useSelector(toggleSidebarValue);

    const { data, status } = useQuery('recommends-channels', getRecommendedChannels);

    // Effects.
    /* useEffect(() => {
        setRecommendedChannels(data);
    }, [data]); */

    return (
        <div className={`${toggleValue ? 'mt-2' : 'mt-0'}`}>
            <div className={`text-sm color-text font-semibold uppercase p-2 ${!toggleValue && 'hidden'}`}>
                RECOMMENDED CHANNELS
            </div>
            <div className="mb-2">
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
