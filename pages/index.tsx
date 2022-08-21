import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/header/Header';

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>Example - 10</title>
            </Head>

            <main className="h-screen bg-gray-50">
                {/* Header */}
                <Header />
            </main>
        </div>
    );
};

export default Home;
