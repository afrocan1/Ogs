import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

export const metadata: Metadata = {
    title: "Landing Page",
    description: "Created with the help of Frontend Tribe",
    icons: {
        icon: "/Goaradio logo round (1).png", // Use image.png as the favicon
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body 
                className={`${inter.variable} font-sans antialiased bg-neutral-950 text-white `}
            >
                {children}
                
            </body>
        </html>
    );
}
