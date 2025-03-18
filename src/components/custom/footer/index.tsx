"use client"

import { useEffect, useRef } from "react"
import { Linkedin, Github, Mail, Phone } from 'lucide-react';
import "@/styles/styles.css"

export default function Contact() {
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
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        )

        const revealElements = sectionRef.current?.querySelectorAll(".reveal")
        revealElements?.forEach((el) => observer.observe(el))

        return () => {
            revealElements?.forEach((el) => observer.unobserve(el))
        }
    }, [])

    return (
        <footer ref={sectionRef} className="py-10 sm:py-16 lg:py-20">
            <div className="mx-4 sm:mx-8 lg:mx-20">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-6 sm:mb-8 reveal">
                            Contato
                        </h1>
                        <p className="max-w-[700px] text-muted-foreground text-lg sm:text-base lg:text-xl reveal">
                            Toda grande ideia começa com uma conversa!
                        </p>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 pt-12">
                    <div className="flex gap-4 text-zinc-50">
                        <a
                            href="https://www.linkedin.com/in/gustavo-monteiro-727450210/?locale=pt_BR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex text-zinc-50 gap-2 hover:text-zinc-400 transition-colors"
                        >
                            <Linkedin size={24} />
                        </a>
                        <a
                            href="https://github.com/gmgpx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex text-zinc-50 gap-2 hover:text-zinc-400 transition-colors"
                        >
                            <Github size={24} />
                        </a>
                    </div>

                    <a
                        href="mailto:gugapires92@gmail.com"
                        className="flex text-zinc-50 items-center gap-2 hover:text-zinc-400 transition-colors"
                    >
                        <Mail size={20} />
                        <span className="text-sm sm:text-base">gugapires92@gmail.com</span>
                    </a>
                    <a
                        href="https://wa.me/5515996834032?text=Olá,%20estou%20interessado%20em%20seus%20serviços!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex text-zinc-50 items-center gap-2 hover:text-zinc-400 transition-colors"
                    >
                        <Phone size={20} />
                        <span className="text-sm sm:text-base">WhatsApp</span>
                    </a>
                </div>

                <div className="flex flex-col justify-center text-zinc-50 text-center text-3xl sm:text-6xl lg:text-9xl py-10 sm:py-16">
                    <a href="#banner" >
                        <p className="py-2 hover:font-serif reveal">
                            Banner
                        </p>
                    </a>
                    <a href="#sobre" >
                        <p className="py-2 hover:font-serif reveal">
                            Sobre mim
                        </p>
                    </a>
                    <a href="#projetos" >
                        <p className="py-2 hover:font-serif reveal">
                            Projetos
                        </p>
                    </a>
                </div>


            </div>

            <div className="pt-4 text-center text-sm sm:text-md lg:text-lg reveal">
                <h1>Todos os direitos reservados © 2025</h1>
                <h1>by Gustavo Monteiro</h1>
            </div>
        </footer>
    )
}