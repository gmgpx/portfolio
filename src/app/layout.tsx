import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gustavo Monteiro | Desenvolvedor & Designer UI/UX",
  description: "Portfólio de Gustavo Monteiro - Desenvolvedor de Software, entusiasta de Inteligência Artificial, Automação e Tecnologia.",
  metadataBase: new URL("https://gmgpx.netlify.app"), 
  keywords: ["Gustavo Monteiro", "Desenvolvedor", "Software", "Design", "Inteligência Artificial", "Automação", "Tecnologia", "Tech"],
  openGraph: {
    title: "Gustavo Monteiro | Desenvolvedor & Designer UI/UX",
    description: "Conheça meu portfólio com projetos inovadores em desenvolvimento de software, design, IA e automação.",
    url: "https://gmgpx.netlify.app",
    siteName: "Portfólio by Gustavo Monteiro",
    images: [
      {
        url: "/images/projects/gm.png",
        width: 1200,
        height: 600,
        alt: "Portfólio by Gustavo Monteiro",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
