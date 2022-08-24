import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { supabase } from '../../services/supabaseClient';
import { CategoryType } from '../../typings';
import Category from './Category';

function Categories() {
    // States variables
    const [categories, setCategories] = useState<CategoryType[] | null>(null);

    // Effects
    useEffect(() => {
        const getCategories = async () => {
            const { data, error } = await supabase
                .from('categories')
                .select('*, tags!inner(*)');

            setCategories(data);
        };

        getCategories();
    }, []);

    return (
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-1 sm:grid-cols-2">
            {categories?.map(category => (
                <Category
                    key={category.name}
                    name={category.name}
                    image={category.image}
                    views={category.views}
                    tags={category.tags}
                />
            ))}
        </div>
    );
}

export default Categories;
