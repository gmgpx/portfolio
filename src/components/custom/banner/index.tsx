"use client";

import TextPressure from "@/components/bits/TextPressure/TextPressure";
import "@/styles/styles.css";

export default function Banner() {
    return (
        <div id="banner" className="w-full h-screen flex items-center justify-center overflow-hidden">
            <div className="md:hidden">
                <h1 className="text-6xl font-bold">Portfólio</h1>
                <p className="text-2xl">by Gustavo Monteiro</p>
            </div>

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
                <TextPressure
                    text="Portfólio"
                    flex={true}
                    alpha={false}
                    stroke={false}
                    width={false}
                    weight={true}
                    italic={true}
                    textColor="#fafafa"
                    minFontSize={200}
                />
                <p className="text-center text-xl md:text-2xl">by Gustavo Monteiro</p>
            </div>
        </div>
    );
}
