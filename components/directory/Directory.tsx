import Categories from './Categories';
import DirectoryFilters from './DirectoryFilters';
import DirectoryTittle from './DirectoryTittle';
import Tabs from './Tabs';

function Directory() {
    return (
        <div className="background-color flex-1 py-2 px-7 overflow-y-auto scrollbar hover:show-scroll-bar">
            <DirectoryTittle />
            <Tabs />
            <DirectoryFilters />
            <Categories />
        </div>
    );
}

export default Directory;
