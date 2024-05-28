'use client'
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import {DeviceMobileCamera, DesktopTower} from '@phosphor-icons/react'
import { NavBar } from './../navbar';
export default function Downloads() {
    return (
        <>
            <main>
                <div className="min-h-screen relative bg-black">
                    <div className="flex items-start justify-center">
                        <NavBar />
                    </div>
                    <div className="relative z-10 mt-10 flex flex-col justify-center items-center">
                        <h1 className='text-6xl font-bold'>
                            JOGUE AGORA MESMO!
                        </h1>
                        <p className='pt-6 text-gray-400 font-semibold max-w-[700px] break-words'>
                            Nossos servidores são multiplataforma, permitindo que você escolha entre jogar no Android ou no PC.
                            Selecione uma das opções para aproveitar a experiência em nosso servidor.
                        </p>
                        <div className='flex flex-row pt-10'>
                            <div className="pr-5">
                                <Button asChild className="bg-green-600 hover:bg-green-300 rounded-full p-6 shadow-md font-bold">
                                    <Link target="_blank" href="https://play.google.com/store/apps/details?id=ru.unisamp_mobile.launcher&pcampaignid=web_share"><DeviceMobileCamera size={30} weight="bold" /> ANDROID DOWNLOAD</Link>
                                </Button>
                            </div>
                            <Button asChild className="bg-green-600 pl-32 hover:bg-green-300 rounded-full p-6 shadow-md font-bold">
                                <Link target="_blank" href="https://www.moddb.com/mods/san-andreas-multiplayer/downloads/sa-mp-0-3-7-r3-1"><DesktopTower size={30} weight="bold" className="pr-1"/> PC DOWNLOAD</Link>
                            </Button>
                        </div>
                    <img src="/fundo.png" alt="fundo" className="w-72 h-96"/>
                    </div>
                </div>
            </main>
        </>
    )

}