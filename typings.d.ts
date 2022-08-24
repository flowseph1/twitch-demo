export interface CategoryType {
    name: string;
    image: string;
    views: number;
    tags: { id: number; name: string }[];
}
