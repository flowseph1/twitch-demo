import type { NextPage } from 'next';
import Head from 'next/head';
import Directory from '../components/directory/Directory';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Sidebar from '../components/Sidebar/Sidebar';

const Home: NextPage = () => {
    return (
        <div className="">
            <Head>
                <title>Twitch Demo</title>
            </Head>

            <main className="flex flex-col h-screen bg-gray-50">
                {/* Header */}
                <Header />

                <div className="flex flex-1 flex-nowrap relative overflow-y-auto">
                    {/* SideBar */}
                    <Sidebar />
                    {/* Directory */}
                    <Directory />
                </div>

                <Footer />
            </main>
        </div>
    );
};

export default Home;
