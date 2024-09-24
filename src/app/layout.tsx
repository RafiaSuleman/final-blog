import {Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/navlinks";
import Header from "../components/navbar/header";
import Footer from "../components/footer/footer";

const SchibstedGrotesk = Schibsted_Grotesk({ 
  subsets: ["latin"],
  weight:['400','500','600','700','800','900'],
  variable:"--font-schibstedGgrotesk"

});

export const metadata= {
  title: "Blog",
  description: "Tech Blogs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={SchibstedGrotesk.variable}>
        {/* <Header /> */}
        {children}
        <Footer/>
        </body>
    </html>
  );
}
