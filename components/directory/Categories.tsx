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
];

function Categories() {
    return (
        <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-9  2xl:grid-cols-10 gap-3 overflow-visible ">
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
