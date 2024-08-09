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
                    Made with <a href="https://react.dev/" target="_blank" className="underline">React JS,</a> + <a href="https://tailwindcss.com/" target="_blank" className="underline">Tailwinds</a> by <a href="http://iam-bo.com/" target="_blank" className="underline">Atthachai Phanuthat</a>, Hosted by <a href="https://vercel.com/" target="_blank" className="underline">@Vercel</a>
                  </div>
                </footer>
              </div>
            </div>
          </div>
        </main>
      </body >
      <GoogleAnalytics gaId="G-FJ6FPWGP1W" />
    </html >
  );
}
