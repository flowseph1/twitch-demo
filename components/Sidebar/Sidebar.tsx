import SideBarIcon from './../../public/side-bar-icon';

function Sidebar() {
    return (
        <div className="bg-[#1f1f23] w-[240px] py-1 px-2">
            <div className="flex justify-between items-center mt-1">
                <h3 className="text-sm color-text font-semibold uppercase">
                    Followed Channels
                </h3>
                <div className="p-1 rounded-[4px] hover:bg-neutral-600 cursor-pointer flex items-center h-fit">
                    <SideBarIcon color={'#efeff1'} width={'20'} height={'20'} />
                </div>
            </div>

            {/* Followed channels */}

            {/* Recommended channels */}
        </div>
    );
}

export default Sidebar;
