import React from 'react';
import Category from './Category';

const categories = [{ title: 'ASMR', image: '', views: 150032, tags: ['IRL'] }];

function Categories() {
    return (
        <div className="grid grid-cols-5">
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
