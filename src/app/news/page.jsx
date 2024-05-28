'use client';

import localFont from 'next/font/local';
import { NavBar } from './../navbar';
import { CardNews } from './card';
import { useEffect, useState } from 'react';

const jairo = localFont({ src: './../fonts/JainiPurva-Regular.ttf' });

export default function News() {
    const [newsData, setNewsData] = useState([]);

    useEffect(() => {
        const fetchedData = [
            {
                title: 'Atualização', data: '28 de maio de 2024',
                content: 'Novos sistemas vem sido implantados no servidor juntamente com diversas correções de bugs.',
                image: '/bg.jpg'
            },
            {
                title: 'News', data: '29 de maio de 2024',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu augue laoreet',
                image: '/bg3.jpg'
            },
            {
                title: 'News', data: '30 de maio de 2024',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu augue laoreet.',
                image: '/bg2.jpg'
            },
        ];
        setNewsData(fetchedData);
    }, []);

    return (
        <>
            <main>
                <div className="min-h-screen relative bg-black">
                    <div className="flex items-start justify-center">
                        <NavBar />
                    </div>
                    <div className="relative z-10 mt-36 flex flex-col justify-center items-center">
                        <h1 className={`${jairo.className} text-6xl`}>
                            NOTÍCIAS
                        </h1>
                        <p className='pt-6 text-gray-400 font-semibold'>Confira as novidades e atualizações por aqui.</p>
                    </div>
                    <div className='flex flex-row pt-6 pl-20'>
                        {newsData.map((item, index) => (
                            <div key={index} className='pl-5 pr-5'>
                                <CardNews title={item.title} date={item.data} content={item.content} image={item.image} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <footer className='text-gray-500 font-bold'>
                        Copyright © 2020-2024, Brasil Gamer Life, All rights reserved
                    </footer>
                </div>
            </main>
        </>
    );
}
