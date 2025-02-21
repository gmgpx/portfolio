"use client"

import TextPressure from '../../bits/TextPressure/TextPressure';
import Threads from '../../bits/Threads/Threads';
import "@/styles/styles.css";

export default function Banner() {
    return (
        <div id="banner" className="w-full h-screen flex flex-row items-center justify-center">

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div >
                    <TextPressure
                        text="Portfólio "
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={false}
                        weight={true}
                        italic={true}
                        textColor="#000"
                        strokeColor="#ffffff"
                        minFontSize={200}
                    />
                </div>
            </div>
        </div>
    );
}