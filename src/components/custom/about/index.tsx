"use client"

import { useEffect, useRef } from "react"
import TiltedCard from "@/components/bits/TiltedCard/TiltedCard"
import LogoWall from "../../bits/LogoWall/LogoWall"
import { CircleUser } from "lucide-react"
import "@/styles/styles.css"

const logoImgs = [
    { imgUrl: "./images/logowall/git.png", altText: "Git" },
    { imgUrl: "./images/logowall/ubuntu.png", altText: "Ubuntu" },
    { imgUrl: "./images/logowall/gcp.png", altText: "Google Cloud Plattform" },
    { imgUrl: "./images/logowall/azure.png", altText: "Azure DevOps" },
    { imgUrl: "./images/logowall/pg.png", altText: "pgAdmin" },
    { imgUrl: "./images/logowall/mongo.png", altText: "MongoDB" },
    { imgUrl: "./images/logowall/docker.png", altText: "Docker" },
    { imgUrl: "./images/logowall/figma.png", altText: "Figma" },
    { imgUrl: "./images/logowall/html.png", altText: "HTML" },
    { imgUrl: "./images/logowall/css.png", altText: "CSS" },
    { imgUrl: "./images/logowall/js.png", altText: "Javascript" },
    { imgUrl: "./images/logowall/react.png", altText: "React" },
    { imgUrl: "./images/logowall/tailwind.png", altText: "Tailwind.css" },
    { imgUrl: "./images/logowall/next.png", altText: "Next.js" },
    { imgUrl: "./images/logowall/vite.png", altText: "Vite" },
    { imgUrl: "./images/logowall/python.png", altText: "Python" },
    { imgUrl: "./images/logowall/streamlit.png", altText: "Streamlit" },
    { imgUrl: "./images/logowall/socket.png", altText: "Socket IO" },
    { imgUrl: "./images/logowall/bot.png", altText: "ChatBot" },
    { imgUrl: "./images/logowall/java.png", altText: "Java8" },
    { imgUrl: "./images/logowall/javaFX.png", altText: "JavaFX" },
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
                <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                    <div className="flex justify-center sm:w-1/3 w-full pointer-events-none md:pointer-events-auto">
                        <TiltedCard
                            imageSrc="https://media.licdn.com/dms/image/v2/D4D03AQFV80494cn8NQ/profile-displayphoto-shrink_400_400/B4DZUUVLhyHAAk-/0/1739802855536?e=1745452800&v=beta&t=ar-A-YMbEFiKRQ3pwxBCYVZuk50GSRCA6fw6tohh5h0"
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

                        <p className="max-w-2xl md:max-w-5xl text-zinc-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed reveal">
                            Sou desenvolvedor Full-Stack apaixonado por criar soluções únicas e inovadoras.
                        </p>

                        <p className="max-w-2xl md:max-w-5xl text-zinc-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed reveal">
                            Formado pela Faculdade de Tecnologia SENAI Gaspar Ricardo Junior em Análise e Desenvolvimento de Sistemas.
                        </p>

                        <p className="max-w-2xl md:max-w-5xl text-zinc-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed reveal">
                        Transformar ideias em soluções criativas e funcionais é o que me motiva. 
                        Com grande interesse por design UI/UX, desenvolvimento de software, 
                        Inteligência Artificial, automação e tecnologia em geral, 
                        busco sempre aprender e inovar, 
                        criando projetos que realmente fazem a diferença.
                        </p>
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