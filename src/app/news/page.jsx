'use client'
import localFont from 'next/font/local';
import { NavBar } from './../navbar';
import { CardNews } from './card';
import { useEffect, useState } from 'react';
import { Skeleton } from "@/components/ui/skeleton"

const jairo = localFont({ src: './../fonts/JainiPurva-Regular.ttf' });

export default function News() {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true);  // Estado de carregamento

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await fetch('/api/read-news');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error('Error fetching news data:', error);
            } finally {
                setLoading(false);  // Definir o carregamento como falso após a busca de dados
            }
        };

        fetchNewsData();
    }, []);

    return (
        <>
            <main>
                <div className="min-h-screen relative bg-black">
                    <div className="flex items-start justify-center">
                        <NavBar />
                    </div>
                    <div className="relative z-10 md:mt-20 lg:mt-36 flex flex-col justify-center items-center">
                        <h1 className={`${jairo.className} text-6xl`}>
                            NOTÍCIAS
                        </h1>
                        <p className='pt-6 text-gray-400 font-semibold'>Confira as novidades e atualizações por aqui.</p>
                    </div>
                    <div className='flex flex-wrap justify-center pt-6 pl-20 pr-20'>
                        {loading ? (  // Mostrar os esqueletos se estiver carregando
                            <>
                                {Array.from({ length: 4 }).map((_, index) => (
                                    <SkeletonCard key={index} />
                                ))}
                            </>
                        ) : (
                            newsData.map((item, index) => (
                                <div key={index} className='pl-5 pr-5 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4'>
                                    <CardNews title={item.title} date={item.data} content={item.content} image={item.image} />
                                </div>
                            ))
                        )}
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



export const SkeletonCard = () => {
    return (
        <div className="pl-5 pr-5 mb-6 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4">
            <div className="p-4 bg-gray-800 rounded-lg shadow-md">
                <Skeleton className="h-8 w-3/4 mb-4" />
                <Skeleton className="h-4 w-1/2 mb-4" />
                <Skeleton className="h-20 w-full mb-4" />
                <Skeleton className="h-48 w-full" />
            </div>
        </div>
    );
};