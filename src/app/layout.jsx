import { Inter } from "next/font/google";
import { openGraphImage } from '../../public/bgl.png'

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brasil Gamer Life",
  description: "Brasil Gamer Life RPG - Servidor SAMP",
  openGraph: {
    ...openGraphImage
  }

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
