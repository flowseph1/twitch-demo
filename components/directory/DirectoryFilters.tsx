import { SearchIcon } from '@heroicons/react/outline';

function DirectoryFilters() {
    return (
        <div className="py-5 flex space-x-3 items-center">
            <div>
                <p className="font-bold text-white">Filter By</p>
            </div>
            <div className="flex items-center bg-neutral-600 p-2 rounded-md space-x-2">
                <SearchIcon className="h-5 w-5 color-text " />
                <input
                    type="text"
                    className="bg-transparent outline-none placeholder:color-text color-text"
                    placeholder="Search tags by categories"
                />
            </div>
        </div>
    );
}

export default DirectoryFilters;
