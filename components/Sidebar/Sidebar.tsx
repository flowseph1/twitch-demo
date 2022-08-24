import SideBarIcon from '../../public/side-bar-icon_hide';
import FollowedChannels from './FollowedChannels';
import RecommendedChannels from './RecommendedChannels';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSidebarValue, toggle } from '../../slices/sidebarSlice';
import SideBarIconOpen from './../../public/side-bar-icon_show';

function Sidebar() {
    const toggleValue = useSelector(toggleSidebarValue);
    const dispatch = useDispatch();

    return (
        <div
            className={`bg-[#1f1f23] ${
                toggleValue ? 'w-[240px]' : 'w-[50px]'
            }  py-1`}
        >
            <div
                className={`flex ${
                    toggleValue ? 'justify-between' : 'justify-center'
                } items-center mt-1 px-2`}
            >
                <h3
                    className={`text-sm color-text font-semibold uppercase ${
                        !toggleValue && 'hidden'
                    }`}
                >
                    Followed Channels
                </h3>
                <div
                    className="p-1 rounded-[4px] hover:bg-neutral-600 cursor-pointer flex items-center h-fit"
                    onClick={() => dispatch(toggle())}
                >
                    {toggleValue ? (
                        <SideBarIcon
                            color={'#efeff1'}
                            width={'20'}
                            height={'20'}
                        />
                    ) : (
                        <SideBarIconOpen
                            color={'#efeff1'}
                            width={'20'}
                            height={'20'}
                        />
                    )}
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
