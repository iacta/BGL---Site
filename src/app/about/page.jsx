'use client';
import { NavBar } from './../navbar';
import { Equipe } from './equipe';
export default function About() {
    return (
        <>
            <main>
                <div className="min-h-screen relative bg-black">
                    <div className="flex items-start justify-center">
                        <NavBar />
                    </div>
                    <div className="relative z-10 mt-10 flex flex-col justify-center items-center">
                        <h1 className='text-6xl font-bold text-center'>
                            QUEM SOMOS?
                        </h1>
                        <p className='pt-6 text-gray-400 font-semibold max-w-[700px] break-words text-center px-6 sm:px-0'>
                            Somos um servidor SA:MP unindo jogadores de todas as partes, aqui construímos laços e famílias para a vida toda.
                            Venha nos conhecer pessoalmente. Estamos sempre trabalhando em novas atualizações e sempre trazendo novos benefícios para todos.
                        </p>
                        <div className='pt-20 w-full max-w-3xl'>
                            <h1 className='text-5xl font-bold text-center'>
                                CONHEÇA NOSSA EQUIPE
                            </h1>
                            <p className="text-center">TRABALHAMOS PELA SUA DIVERSÃO!</p>
                            <Equipe />
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}
