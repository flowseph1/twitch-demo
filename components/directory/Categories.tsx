import React from 'react';
import Category from './Category';

const categories = [
    {
        title: 'ASMR',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/509659-285x380.jpg',
        views: 20132,
        tags: ['IRL'],
    },

    {
        title: 'MineCraft',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-285x380.jpg',
        views: 29330,
        tags: ['Adventure game'],
    },
];

function Categories() {
    return (
        <div className="grid md:grid-cols-5 lg:grid-cols-8 xl:grid-cols-9 gap-3">
            {categories.map(category => (
                <Category
                    key={category.title}
                    title={category.title}
                    image={category.image}
                    views={category.views}
                    tags={category.tags}
                />
            ))}
        </div>
    );
}

export default Categories;
