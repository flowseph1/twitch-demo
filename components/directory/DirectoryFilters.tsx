import { SearchIcon } from '@heroicons/react/outline';

function DirectoryFilters() {
    return (
        <div className="py-6 flex space-x-3 items-center">
            <div>
                <p className="font-bold text-white text-sm">Filter By</p>
            </div>
            <div className="flex items-center bg-neutral-600 p-1.5 rounded-[4px] space-x-2">
                <SearchIcon className="h-4 w-4 color-text " />
                <input
                    type="text"
                    className="bg-transparent outline-none placeholder:text-gray-300 color-text text-sm"
                    placeholder="Search tags by categories"
                />
            </div>
        </div>
    );
}

export default DirectoryFilters;
