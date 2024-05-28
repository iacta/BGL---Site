'use client';

import * as React from "react";
import { CardHome } from './card';
import { NavBar } from "./navbar";
import { DownloadButton } from './button';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="min-h-screen bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('/bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10">
          <div className="flex items-start justify-center">
            <NavBar />
          </div>
          <CardHome />
          <div className="pl-10 mt-8 text-white">
            <h1 className="text-2xl font-bold">
              Venha você também fazer parte dessa aventura!
            </h1>
            <div className="pt-2">
              <p className="text-lg font-semibold">
                No <span className="text-green-400">BGL</span> criamos um espaço onde o lema é a diversão. Imagine-se nas ruas movimentadas,<br />
                vivenciando aventuras cheias de emoção. Venha fazer parte dessa família e descubra<br />
                um mundo repleto de possibilidades emocionantes.
              </p>
              <DownloadButton />
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat relative text-black" style={{ backgroundImage: "url('/bg2.jpg')" }}>
        <div className="relative z-10">
          <div className="bg-white bg-opacity-80 p-10 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Mais Informações</h2>
            <p className="text-md">
              Aqui você pode adicionar mais conteúdo sobre o seu jogo, funcionalidades adicionais, notícias, e qualquer outra informação relevante para seus jogadores. Use esta seção para engajar ainda mais sua comunidade e mantê-los atualizados com todas as novidades.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
