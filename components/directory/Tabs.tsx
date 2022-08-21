import Tab from './Tab';

function Tabs() {
    return (
        <div className="flex space-x-7 w-full">
            <Tab title={'Categories'} active={true} />
            <Tab title={'Live Channels'} active={false} />
        </div>
    );
}

export default Tabs;
