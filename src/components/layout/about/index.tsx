"use client"

import { useEffect, useRef } from "react"
import TiltedCard from "@/components/bits/TiltedCard/TiltedCard"
import LogoWall from "../../bits/LogoWall/LogoWall"
import { CircleUser } from "lucide-react"
import "@/styles/styles.css"

const logoImgs = [
    { imgUrl: "./images/logowall/figma.png", altText: "Figma" },
    { imgUrl: "./images/logowall/git.png", altText: "Git" },
    { imgUrl: "./images/logowall/ubuntu.png", altText: "Ubuntu" },
    { imgUrl: "./images/logowall/docker.png", altText: "Docker" },
    { imgUrl: "./images/logowall/aws.png", altText: "AWS" },
    { imgUrl: "./images/logowall/gcp.png", altText: "Google Cloud Plattform" },
    { imgUrl: "./images/logowall/gemini.png", altText: "GeminiAPI" },
    { imgUrl: "./images/logowall/azure.png", altText: "Azure DevOps" },
    { imgUrl: "./images/logowall/pg.png", altText: "Postgres" },
    { imgUrl: "./images/logowall/sqlserver.png", altText: "SQL Server" },
    { imgUrl: "./images/logowall/prisma.png", altText: "Prisma" },
    { imgUrl: "./images/logowall/mongo.png", altText: "MongoDB" },
    { imgUrl: "./images/logowall/html.png", altText: "HTML" },
    { imgUrl: "./images/logowall/css.png", altText: "CSS" },
    { imgUrl: "./images/logowall/sass.png", altText: "CSSasS" },
    { imgUrl: "./images/logowall/js.png", altText: "Javascript" },
    { imgUrl: "./images/logowall/angular.png", altText: "Angular" },
    { imgUrl: "./images/logowall/astro.png", altText: "AstroJS" },
    { imgUrl: "./images/logowall/vue.png", altText: "VueJS" },
    { imgUrl: "./images/logowall/react.png", altText: "React" },
    { imgUrl: "./images/logowall/tailwind.png", altText: "Tailwind.css" },
    { imgUrl: "./images/logowall/next.png", altText: "Next.js" },
    { imgUrl: "./images/logowall/vite.png", altText: "Vite" },
    { imgUrl: "./images/logowall/nodejs.png", altText: "NodeJS" },
    { imgUrl: "./images/logowall/nestjs.png", altText: "NestJS" },
    { imgUrl: "./images/logowall/python.png", altText: "Python" },
    { imgUrl: "./images/logowall/streamlit.png", altText: "Streamlit" },
    { imgUrl: "./images/logowall/rest.png", altText: "REST" },
    { imgUrl: "./images/logowall/socket.png", altText: "Socket IO" },
    { imgUrl: "./images/logowall/bot.png", altText: "ChatBot" },
    { imgUrl: "./images/logowall/java.png", altText: "Java8" },
    { imgUrl: "./images/logowall/javaFX.png", altText: "JavaFX" },
    { imgUrl: "./images/logowall/csharp.png", altText: "csharp" },
    { imgUrl: "./images/logowall/dotnet.png", altText: "dotnet" },
]

export default function About() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("active")
                    }
                })
            },
            {
                threshold: 0.1, // Ativa quando 10% do elemento está visível
                rootMargin: "0px 0px -50px 0px", // Ajusta o ponto de ativação
            }
        )

        const revealElements = sectionRef.current?.querySelectorAll(".reveal")
        revealElements?.forEach((el) => observer.observe(el))

        return () => {
            revealElements?.forEach((el) => observer.unobserve(el))
        }
    }, [])

    return (
        <section id="sobre" ref={sectionRef}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl lg:text-8xl mb-8 reveal">
                        Sobre mim
                    </h1>
                    <p className="max-w-[700px] text-muted-foreground text-lg sm:text-base lg:text-xl reveal">
                        Uma breve apresentação pessoal e profissional
                    </p>
                </div>
            </div>
            <div className="p-8 rounded-2xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="flex justify-center lg:w-1/3 w-full pointer-events-none lg:pointer-events-auto">
                        <TiltedCard
                            imageSrc="https://avatars.githubusercontent.com/u/158373467?v=4"
                            altText="Imagem de perfil"
                            captionText="Bora trabalhar juntos?"
                            containerHeight="400px"
                            containerWidth="400px"
                            imageHeight="400px"
                            imageWidth="400px"
                            rotateAmplitude={12}
                            scaleOnHover={1.2}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                        />
                    </div>

                    <div className="flex flex-col space-y-4 sm:w-2/3 w-full text-start sm:text-left">
                        <div className="flex flex-row items-center justify-start mb-4">
                            <CircleUser className="w-10 h-10 mr-2 text-zinc-50" />
                            <h1 className="text-xl sm:text-4xl font-semibold reveal">Gustavo Monteiro</h1>
                        </div>


                        <h1 className="max-w-2xl md:max-w-4xl lg:max-w-6xl text-zinc-100 text-md/relaxed md:text-xl/relaxed lg:text-2xl/relaxed reveal">
                            Desenvolvedor apaixonado por criar soluções <b>únicas, eficientes e seguras</b>,
                            com foco em qualidade de código e experiência do usuário.
                        </h1>

                        <h1 className="max-w-2xl md:max-w-4xl lg:max-w-6xl text-zinc-100 text-md/relaxed md:text-xl/relaxed lg:text-2xl/relaxed reveal">
                            Graduado em Análise e Desenvolvimento de Sistemas pela <b>Faculdade de Tecnologia SENAI &ldquo;Gaspar Ricardo Júnior&rdquo;</b>, reconhecida com <b>nota máxima no MEC.</b>
                        </h1>

                        <h1 className="max-w-2xl md:max-w-4xl lg:max-w-6xl text-zinc-50 text-md/relaxed md:text-xl/relaxed lg:text-2xl/relaxed reveal">
                            Tenho grande interesse em <b>aprender constantemente</b>, movido por <b>desafios</b>, sempre buscando sair da zona de conforto.
                            Explorando desde tecnologias até boas práticas de desenvolvimento de software,
                            aplicando meus conhecimentos em <b>soluções acessíveis, eficientes e que realmente agregam valor.</b>
                        </h1>
                    </div>
                </div>

                <div className="mt-12">
                    <LogoWall
                        items={logoImgs}
                        direction="horizontal"
                        pauseOnHover={false}
                        size="clamp(8rem, 2rem + 20vmin, 25rem)"
                        duration="60s"
                        bgAccentColor="#fafafa"
                        bgColor="#09090b0"
                    />
                </div>
            </div>
        </section>
    )
}