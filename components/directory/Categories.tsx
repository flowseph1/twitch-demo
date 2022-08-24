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
    {
        title: 'Just Chatting',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/509658-285x380.jpg',
        views: 400379,
        tags: ['IRL'],
    },
    {
        title: 'Pools, Hot Tubs & Beaches',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/116747788-285x380.jpg',
        views: 4445,
        tags: ['IRL'],
    },
    {
        title: 'Animals, Aquariums & Zoos',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/272263131-285x380.jpg',
        views: 1962,
        tags: ['IRL'],
    },
    {
        title: 'Music',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/26936-285x380.jpg',
        views: 23560,
        tags: ['IRL'],
    },
    {
        title: 'Fortnite',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/33214-285x380.jpg',
        views: 66230,
        tags: ['Shooter', 'Action'],
    },
    {
        title: 'Valorant',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg',
        views: 91952,
        tags: ['Shooter'],
    },
    {
        title: 'Art',
        image: 'https://static-cdn.jtvnw.net/ttv-boxart/509660-285x380.jpg',
        views: 10232,
        tags: ['Creative', 'IRL'],
    },
];

function Categories() {
    /* flex min-w-full flex-wrap gap-1 */
    return (
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-1 sm:grid-cols-2">
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
