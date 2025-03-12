"use client"

import { useEffect, useRef } from "react"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import "@/styles/styles.css"

type Project = {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
    github?: string
    demo?: string
    category: string
}

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null)
    const [filter, setFilter] = React.useState<string>("all")

    const projects: Project[] = [
        {
            id: 1,
            title: "Water Safe",
            description: "Monitoramento da drenagem do ar-condicionado, com dashboards para acompanhar a coleta e reutilização da água na irrigação das plantas da faculdade.",
            image: "/images/projects/water-safe.png",
            tags: ["React", "TailwindCSS", "Axios", "Node.js", "SQLite", "Figma"],
            github: "https://github.com/KauanIzidoro/watersafer-monitoring",
            category: "fullstack",
        },
        {
            id: 2,
            title: "Tag System",
            description: "Sistema de controle de acesso com ESP32 e RFID, integrado a uma aplicação Web para leitura de RFID, autenticação e registro de eventos em tempo real.",
            image: "/images/projects/tag.png",
            tags: ["React", "TailwindCSS", "Next.js", "C#", "ASP.NET", "ESP32"],
            github: "https://github.com/SL-Squad442/tag_system",
            category: "fullstack",
        },
        {
            id: 3,
            title: "Evolve.br",
            description: "Landing page para evolve.br, empresa especializada em sistemas sob demanda, oferecendo soluções personalizadas às necessidades de cada cliente.",
            image: "/images/projects/evolve.png",
            tags: ["React", "TailwindCSS", "Next.js", "SEO", "Framer-Motion", "Spline", "3D"],
            demo: "https://evolvebrasil.com",
            category: "frontend",
        },
        {
            id: 4,
            title: "Atemporal",
            description: "Jogo em Java focado no desenvolvimento de habilidades em OOP, versionamento de código e documentação, proporcionando uma experiência prática e educativa.",
            image: "/images/projects/atemporal.jpeg",
            tags: ["Java 8", "JavaFX", "CSS", "Git", "Scrum", "POO", "Documentação"],
            github: "https://github.com/gmgpx/Atemporal_java_game",
            category: "fullstack",
        },
        {
            id: 5,
            title: "iBike",
            description: "Aplicativo para busca de anúncios confiáveis e recomendados para motos, simulando dados com JSON-Server. A interface permite uma navegação fluida entre principais anúncios, marcas e avaliações.",
            image: "/images/projects/ibike.png",
            tags: ["React Native", "JSON-Server", "Android Studio", "Mobile", "Figma"],
            github: "https://github.com/gmgpx/iBike",
            category: "frontend",
        },
    ]

    const filteredProjects = filter === "all"
        ? projects
        : projects.filter((project) => project.category === filter)

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
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        )

        const revealElements = sectionRef.current?.querySelectorAll(".reveal")
        revealElements?.forEach((el) => observer.observe(el))

        return () => {
            revealElements?.forEach((el) => observer.unobserve(el))
        }
    }, [filter])

    return (
        <section ref={sectionRef} id="projetos" className="py-10 sm:py-16 lg:py-20">
            <div className="mx-4 sm:mx-8 lg:mx-20">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl lg:text-8xl mb-8 reveal">
                            Projetos
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground text-lg sm:text-base lg:text-xl reveal">
                            Confira alguns de meus projetos com diferentes tecnologias
                        </p>
                    </div>
                </div>

                <div className="flex justify-center mt-6 sm:mt-8 mb-8 sm:mb-10 reveal">
                    <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                        <Button
                            variant={filter === "all" ? "default" : "outline"}
                            onClick={() => setFilter("all")}
                            className="rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-2"
                        >
                            All
                        </Button>
                        <Button
                            variant={filter === "frontend" ? "default" : "outline"}
                            onClick={() => setFilter("frontend")}
                            className="rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-2"
                        >
                            Frontend
                        </Button>
                        <Button
                            variant={filter === "fullstack" ? "default" : "outline"}
                            onClick={() => setFilter("fullstack")}
                            className="rounded-full text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-2"
                        >
                            Full Stack
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
                    {filteredProjects.map((project) => (
                        <Card key={project.id} className="overflow-hidden reveal border-0">
                            <div className="aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    width={600}
                                    height={400}
                                    className="object-cover transition-transform duration-300 hover:scale-105 h-full w-full"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle className="text-lg sm:text-xl md:text-2xl">{project.title}</CardTitle>
                                <CardDescription className="text-sm sm:text-base md:text-lg">{project.description}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <Badge
                                            key={tag}
                                            variant="secondary"
                                            className="text-xs sm:text-sm md:text-base px-2 sm:px-3 py-1"
                                        >
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex justify-between">
                                {project.github && (
                                    <Button
                                        variant="outline"
                                        className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-2"
                                        asChild
                                    >
                                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                            Code
                                        </Link>
                                    </Button>
                                )}
                                {project.demo && (
                                    <Button
                                        className="text-xs sm:text-sm md:text-base px-3 sm:px-4 py-1 sm:py-2"
                                        asChild
                                    >
                                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                            Demo
                                        </Link>
                                    </Button>
                                )}
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}