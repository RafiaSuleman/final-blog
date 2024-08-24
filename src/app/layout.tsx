import {Schibsted_Grotesk } from "next/font/google";
import "./globals.css";

const SchibstedGrotesk = Schibsted_Grotesk({ 
  subsets: ["latin"],
  weight:['400','500','600','700','800','900'],
  variable:"--font-schibstedGgrotesk"

});

export const metadata= {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SchibstedGrotesk.variable}>{children}</body>
    </html>
  );
}
