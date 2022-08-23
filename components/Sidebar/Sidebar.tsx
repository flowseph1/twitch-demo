import SideBarIcon from './../../public/side-bar-icon';
import FollowedChannels from './FollowedChannels';
import RecommendedChannels from './RecommendedChannels';
import { useSelector, useDispatch } from 'react-redux';
import { selectValue, toggle } from '../../slices/sidebarSlice';

function Sidebar() {
    const toggleValue = useSelector(selectValue);
    const dispatch = useDispatch();

    console.log(toggleValue);

    return (
        <div className="bg-[#1f1f23] w-[240px] py-1">
            <div className="flex justify-between items-center mt-1 px-2">
                <h3 className="text-sm color-text font-semibold uppercase">
                    Followed Channels
                </h3>
                <div
                    className="p-1 rounded-[4px] hover:bg-neutral-600 cursor-pointer flex items-center h-fit"
                    onClick={() => dispatch(toggle())}
                >
                    <SideBarIcon color={'#efeff1'} width={'20'} height={'20'} />
                </div>
            </div>

            {/* Followed channels */}
            <FollowedChannels />

            {/* Recommended channels */}
            <RecommendedChannels />
        </div>
    );
}

export default Sidebar;
