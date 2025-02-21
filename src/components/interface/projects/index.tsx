"use client";

import { useState } from "react";
import "@/styles/styles.css";

export default function Projects() {
    const projects = [
        {
            title: "Water Monitoring",
            description: `Dashboard personalizado para monitoramento da escoagem dos ar-condicionados da Faculdade, 
            com o intuito de reutilizar essa água para regar plantas. Este projeto extracurricular do Senai tem como objetivo ajudar a comunidade e promover a sustentabilidade.`,
            link: "https://github.com/KauanIzidoro/watersafer-monitoring",
            image: "/images/projects/water-safe.png",
        },
        {
            title: "Tag System",
            description: `Desenvolvimento de uma aplicação web focada na análise de dados e na criação de dashboards personalizados, 
            com o objetivo de monitorar e gerenciar a entrada e saída de salas utilizando 'tags' RFID, 
            proporcionando uma solução eficiente e automatizada para controle de acessos em ambientes corporativos ou educacionais.`,
            link: "https://github.com/gmgpx/osiris_project",
            image: "/images/projects/tag.png",
        },
        {
            title: "Site Evolve",
            description: `Desenvolvimento de um site personalizado para a empresa Evolve Brasil, 
            especializada em soluções de TI para empresas. 
            O grande diferencial deste projeto é a integração de manipulação 3D de objetos, 
            proporcionando uma experiência interativa e inovadora para os usuários.`,
            link: "https://evolvebrasil.com",
            image: "/images/projects/evolve.png",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const currentProject = projects[currentIndex];

    return (
        <section id="projects" className="m-20 flex flex-col items-center">
            <h1 className="text-8xl font-bold mb-8 text-start w-full">Projetos</h1>

            <div className="flex flex-col lg:flex-row p-6 rounded-xl shadow-2xl w-full">

                <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                        src={currentProject.image}
                        alt="Imagem do projeto"
                        className="w-full h-96 object-contain rounded-xl"
                    />
                </div>


                <div className="w-full lg:w-1/2 flex flex-col justify-center p-6">
                    <h1 className="text-2xl font-semibold mb-4">{currentProject.title}</h1>
                    <p className="text-gray-700 mb-4">{currentProject.description}</p>
                    <a
                        href={currentProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:underline mb-4"
                    >
                        Ver mais
                    </a>

                    <div className="flex justify-between w-full mt-6 rounded-xl">
                        <button
                            onClick={prevProject}
                            className="px-4 py-2 hover:bg-slate-100"
                        >
                            Anterior
                        </button>
                        <button
                            onClick={nextProject}
                            className="px-4 py-2 hover:bg-slate-100"
                        >
                            Próximo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
