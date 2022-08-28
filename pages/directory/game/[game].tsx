import { HeartIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
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
                            <div className="min-w-[144px]">
                                <Image src={game?.image} width={'144'} height={'192'} objectFit="contain" alt={''} />
                            </div>
                            <div className="flex flex-col space-y-2 justify-center flex-wrap">
                                <h1 className={' text-4xl font-bold'}>{game.name}</h1>
                                <div className="flex md:space-x-3 items-center md:flex-row sm:flex-col sm:items-start sm:justify-start sm:space-y-1 md:space-y-0">
                                    <p className="text-lg sm:leading-normal">
                                        <span className="font-bold sm:leading-normal">
                                            {ViewCompactFormat(game.views)}
                                        </span>{' '}
                                        Viewers
                                    </p>
                                    <p
                                        className={
                                            'font-bold text-xl  sm:leading-normal flex items-center md:leading-none'
                                        }
                                    >
                                        •
                                    </p>
                                    <p className="text-lg  sm:leading-normal">
                                        <span className="font-bold  sm:leading-normal">
                                            {ViewCompactFormat(game.followers)}
                                        </span>{' '}
                                        Followers
                                    </p>
                                    <p
                                        className={
                                            'font-bold text-xl sm:leading-normal flex items-center md:leading-none'
                                        }
                                    >
                                        •
                                    </p>
                                    <div className="flex sm:leading-normal items-center md:leading-none space-x-2 h-full">
                                        {game.tags?.map(tag => (
                                            <div
                                                key={tag.id}
                                                className="rounded-full font-semibold bg-neutral-700 hover:bg-neutral-600 text-gray-200 leading-none text-xs flex items-center py-1 px-3 h-fit cursor-pointer"
                                            >
                                                {tag.name}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                {game?.description && (
                                    <div className=" text-sm text-gray-400 flex">
                                        <div className="max-w-2xl line-clamp-2">{game.description}</div>
                                        <div className="flex items-end cursor-pointer primary-color hover:!text-[#a970ff]">
                                            <p>More</p>
                                            <ChevronDownIcon className="h-5 w-5" />
                                        </div>
                                    </div>
                                )}
                                <button className="flex space-x-1 bg-[#9147ff] hover:bg-[#772ce8] rounded-md py-1.5 px-2 w-fit items-center !mt-4 font-bold">
                                    <HeartIcon className="h-5 w-5" />
                                    <p className="">Follow</p>
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
    const { data } = await supabase.from('categories').select('*, tags!inner(*)').eq('name', params?.game);

    const dataValue = data && data[0];

    return {
        props: {
            game: dataValue,
        },
    };
};
