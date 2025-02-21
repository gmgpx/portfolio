"use client";

import "@/styles/styles.css";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="p-4 pb-36">
            <div className="flex flex-col text-start">
                <div className="mb-4 font-bold">
                    <h1>Todos os direitos reservados, ©2025.</h1>
                    <h1>Gustavo Monteiro</h1>
                </div>
                <div className="flex flex-row text-black space-x-4 drop-shadow-2xl">
                    <Instagram size={40} />
                    <Linkedin size={40} />
                </div>
            </div>
        </footer>
    );
}
