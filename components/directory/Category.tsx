interface Props {
    title: string;
    views: number;
    image: string;
    tags: string[];
}

function Category({ title, views, image, tags }: Props) {
    return <div>Category</div>;
}

export default Category;
