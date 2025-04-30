"use client";

import { useEffect, useState } from "react";
import ShapeBlur from "@/components/bits/ShapeBlur/ShapeBlur";
import "@/styles/styles.css";

export default function Banner() {
    const [pixelRatio, setPixelRatio] = useState(1);

    useEffect(() => {
        setPixelRatio(window.devicePixelRatio || 1);
    }, []);

    return (
        <section id="banner" className="h-screen relative flex items-center">
            <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold italic text-4xl sm:text-6xl lg:text-8xl mix-blend-difference">
                Hi, I&rsquo;m <br />
                gmgpx. <br />
                your next <br />
                dev.
            </h1>
            <ShapeBlur
                variation={0}
                pixelRatioProp={pixelRatio}
                shapeSize={1.4}
                roundness={0.5}
                borderSize={0.05}
                circleSize={0.5}
                circleEdge={1}
            />
        </section>
    );
}
