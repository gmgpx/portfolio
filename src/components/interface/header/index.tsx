"use client"

import { Handshake, LayoutGrid, CircleUser } from "lucide-react";

export default function Header() {
    return (
        <header>
            <p className="fixed left-2 top-2 w-12 font-bold text-4xl drop-shadow-xl">gm</p>
            <div className="fixed left-0 top-1/2 p-4 bg-opacity-50 backdrop-blur-md rounded-r-3xl shadow-xl">
                <div className="text-start space-y-4 py-2 text-black">
                    <CircleUser />
                    <LayoutGrid />
                    <Handshake />
                </div>
            </div>
        </header>
    );
};
