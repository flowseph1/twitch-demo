import { HeartIcon } from '@heroicons/react/outline';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import React, { PropsWithChildren } from 'react';
import { useQuery } from 'react-query';
import Header from '../../../components/header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { CategoryType } from '../../../typings';
import { supabase } from './../../../services/supabaseClient';
import { ViewCompactFormat } from './../../../utils/ViewsCompactFormat';

interface Props {
    game: CategoryType;
}

function CategoryDetail(props: Props) {
    const game = props.game;

    return (
        <div className="h-screen">
            <main className="flex flex-col h-full">
                <Header />
                <div className="flex flex-1">
                    <Sidebar />
                    <div className="flex-1 background-color p-8 color-text">
                        <div className="flex gap-7">
                            <div>
                                <Image src={game?.image} width={'144'} height={'192'} objectFit="contain" alt={''} />
                            </div>
                            <div className="flex flex-col space-y-2 justify-center">
                                <h1 className={' text-4xl font-bold'}>{game.name}</h1>
                                <p>
                                    <span className="font-bold text-xl">{ViewCompactFormat(game.views)} </span>
                                    Viewers •
                                </p>
                                <button className="flex space-x-2 bg-[#9147ff] rounded-md py-1 px-2 w-fit items-center !mt-4">
                                    <HeartIcon className="h-5 w-5" />
                                    <p className="font-bold">Follow</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CategoryDetail;

export const getStaticPaths = async () => {
    const { data } = await supabase.from('categories').select('*');

    const paths = data?.map((game: CategoryType) => ({
        params: {
            game: game.name,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data } = await supabase.from('categories').select('*').eq('name', params?.game);

    const dataValue = data && data[0];

    return {
        props: {
            game: dataValue,
        },
    };
};
