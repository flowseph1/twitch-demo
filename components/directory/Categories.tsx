import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { supabase } from '../../services/supabaseClient';
import { CategoryType } from '../../typings';
import Category from './Category';

const getCategories = async () => {
    const { data, error } = await supabase.from('categories').select('*, tags!inner(*)');
    return data;
};

function Categories() {
    // States variables
    const { data, status } = useQuery('categories', getCategories);

    return (
        <div className="grid md:grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))] gap-1 sm:grid-cols-2">
            {data?.map((category: CategoryType) => (
                <Category
                    key={category.name}
                    name={category.name}
                    image={category.image}
                    views={category.views}
                    followers={category.followers}
                    description={category.description}
                    tags={category.tags}
                />
            ))}
        </div>
    );
}

export default Categories;
