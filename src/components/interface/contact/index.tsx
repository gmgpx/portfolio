"use client";

import "@/styles/styles.css";

export default function Contact() {
    return (
        <section id="contact" className="m-20">
            <h1 className="text-8xl font-bold mb-8 text-start w-full">Contato</h1>
            <div className="flex flex-col md:flex-row w-full bg-white rounded-xl shadow-2xl p-6 space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-3/5 h-[600px] flex justify-center items-center">
                    
                </div>
                <div className="flex flex-col w-full md:w-2/5 justify-center text-start p-8">
                    <h1 className="text-4xl font-semibold mb-4">Transforme sua ideia em realidade!</h1>
                    <p className="text-xl mb-6">Grandes ideias começam com uma conversa. Entre em contato para dar vida ao seu projeto!</p>
                    <div className="flex gap-4">
                    <a
                            href="https://wa.me/5515996834032?text=Olá%2C%20gostaria%20de%20mais%20informações%20sobre%20os%20serviços%20da%20Evolve."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200"
                        >
                            WhatsApp
                        </a>
                        

                        <p className="text-lg self-center">ou</p>

                        <a
                            href={`mailto:gugapires92@gmail.com?subject=Solicitação%20de%20informações&body=Olá%2C%20gostaria%20de%20contratar%20um%20dos%20seus%20serviços%20.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-200"
                        >
                            Enviar E-mail
                        </a>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}
