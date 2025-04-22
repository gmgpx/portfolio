"use client";

import { MaskContainer } from "../mask-effect";
import "@/styles/styles.css";

export default function Banner() {
    return (
        <section id="banner" className="h-screen">
            <MaskContainer
                revealText={
                    <p className="mx-auto text-center text-4xl md:text-6xl lg:text-9xl font-bold">
                        @gmgpx
                    </p>
                }
                className="text-white"
            >
                <p className="italic">" <span className="text-blue-400">Design</span> is not just what it looks like and feels like. <span className="text-blue-400">Design</span> is how it works. "</p>
            </MaskContainer>        
        </section>
    );
}
