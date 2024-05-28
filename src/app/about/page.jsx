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
                        <h1 className='text-6xl font-bold'>
                            QUEM SOMOS?
                        </h1>
                        <p className='pt-6 text-gray-400 font-semibold max-w-[700px] break-words'>
                            Somos um servidor SA:MP unindo jogadores de todas as partes, aqui construimos laços e familias para a vida toda.
                            Venha nos conhecer pessoalmente. Estamos sempre trabalhando em novas atualizações e sempre trazendo novos beneficios para todos.
                        </p>
                        <div className='pt-20'>
                            <h1 className='text-5xl font-bold'>
                                CONHEÇA NOSSA EQUIPE
                            </h1>
                            <p>TRABALHAMOS PELA SUA DIVERSÃO!</p>
                            <Equipe />
                        </div>

                    </div>
                </div>
            </main>
        </>
    )
}

