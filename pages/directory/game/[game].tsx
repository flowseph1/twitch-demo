import { GetStaticProps } from 'next';
import React from 'react';
import Header from '../../../components/header/Header';
import Sidebar from '../../../components/Sidebar/Sidebar';

function CategoryDetail() {
    return (
        <div className="h-screen">
            <main className="flex flex-col h-full">
                <Header />
                <div className="flex flex-1">
                    <Sidebar />
                    <div className="flex-1 background-color">
                        Detalles de Categoria
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CategoryDetail;

export const getStaticPaths = async () => {
    const gamesArray = ['ASMR', 'Minecraft', 'Just Chatting'];

    const paths = gamesArray.map(game => ({
        params: {
            game: game,
        },
    }));

    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async context => {
    return {
        props: {
            game: {},
        },
    };
};
