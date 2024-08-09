import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import Navigation from "./components/navbar";
import TopNavigation from "./components/topnav";
import Script from "next/script";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Atthachai's Portflolio",
  description: "Hi! Welcome to Atthachai Phanuthat Portflolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex justify-center">
          <div>
            {/*Warpping Container*/}
            <div className="lg:flex max-w-[1240px] max-w-sm-[300px] mb-12 py-20">
              {/*Navigation*/}
              <TopNavigation />
              <Navigation />
              {/*Container*/}
              <div className="lg:w-9/12  md:12/12bg-none shadow-l lg-px-16">
                {children}
                <footer className="flex items-center flex-warp max-w-[1240px] mb-12 px-30 flex-row h-64 text-center text-gray-400">
                  <div className=" w-full items-center text-sm font-light">
                    Made with React JS + Tailwinds by Atthachai Phanuthat
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </main>
      </body>
      <GoogleAnalytics gaId="G-4MM174P3LW" />
    </html>
  );
}
