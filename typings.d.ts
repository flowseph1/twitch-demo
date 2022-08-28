export interface CategoryType {
    name: string;
    image: string;
    views: number;
    tags: { id: number; name: string }[];
    followers: number;
    description: text | null;
}

export interface SideBarChannel {
    name: string;
    image: string;
    viewers: number;
    category: string | null;
    status: boolean;
    newVideos: number | null;
}
