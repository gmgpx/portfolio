"use client";

import TiltedCard from '@/components/bits/TiltedCard/TiltedCard';
import LogoWall from '../../bits/LogoWall/LogoWall';
import "@/styles/styles.css";
import { CircleUser } from 'lucide-react';

const logoImgs = [
    { imgUrl: "./images/LogoWall/python.png", altText: "Python" },
    { imgUrl: "./images/LogoWall/next.png", altText: "Next.js" },
    { imgUrl: "./images/LogoWall/figma.png", altText: "Figma" },
    { imgUrl: "./images/LogoWall/tailwind.png", altText: "Tailwind.css" },
    { imgUrl: "./images/LogoWall/azure.png", altText: "Azure DevOps" },
    { imgUrl: "./images/LogoWall/git.png", altText: "GitFlow" },
    { imgUrl: "./images/LogoWall/react.png", altText: "React" }
];

export default function About() {
    return (
        <section id="sobre" className="m-20">
            <h1 className="text-8xl font-bold mb-8 text-start">Sobre mim</h1>
            <div className="bg-white shadow-2xl p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="flex justify-center sm:w-1/3 w-full">
                        <TiltedCard
                            imageSrc="https://media.licdn.com/dms/image/v2/D4D03AQFV80494cn8NQ/profile-displayphoto-shrink_400_400/B4DZUUVLhyHAAk-/0/1739802855536?e=1745452800&v=beta&t=ar-A-YMbEFiKRQ3pwxBCYVZuk50GSRCA6fw6tohh5h0"
                            altText="Imagem de perfil"
                            captionText="Bora trabalhar juntos?"
                            containerHeight="300px"
                            containerWidth="300px"
                            imageHeight="300px"
                            imageWidth="300px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        />
                    </div>

                    <div className="flex flex-col px-8 sm:w-2/3 w-full text-center sm:text-left animate-slide-up">
                        <div className='flex flex-row items-center justify-start mb-4'>
                            <CircleUser className='text-black mr-2' />
                            <h1 className="text-3xl font-semibold">Gustavo Monteiro</h1>
                        </div>
                        <p className="text-lg mb-4 animate-slide-up">
                            Sou desenvolvedor Full-Stack apaixonado por criar soluções únicas e inovadoras.
                        </p>
                        <p className="text-lg mb-4">
                            Formado pela Faculdade de Tecnologia Gaspar Ricardo Jr em Análise e Desenvolvimento de Sistemas.
                            Fã assíduo de design, tecnologia e automação.
                        </p>
                        <p className="text-lg mb-4">
                            Atualmente, sou desenvolvedor da <strong>Evolve</strong>.
                            Com alguns colegas com as mesmas causas e intenções,
                            fundamos a empresa com o objetivo de criar sistemas personalizados,
                            atendendo à necessidade das empresas por soluções mais específicas,
                            ao invés de utilizar sistemas genéricos e com altas assinaturas.
                        </p>
                    </div>

                </div>

                <div className="mt-12">
                    <LogoWall
                        items={logoImgs}
                        direction='horizontal'
                        pauseOnHover={false}
                        size="clamp(8rem, 2rem + 20vmin, 25rem)"
                        duration="60s"
                        bgAccentColor="#c0c0c0"
                        bgColor="#ffffff"
                    />
                </div>
            </div>
        </section>
    );
}
