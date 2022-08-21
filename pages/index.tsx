import type { NextPage } from 'next';
import Head from 'next/head';
import Directory from '../components/directory/Directory';
import Header from '../components/header/Header';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Twitch Demo</title>
            </Head>

            <main className="flex flex-col h-screen bg-gray-50">
                {/* Header */}
                <Header />
                {/* Directory */}
                <Directory />
            </main>
        </div>
    );
};

export default Home;
