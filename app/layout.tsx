import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { MenuProvider } from "@/context/MenuProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shiva Yadav - Portfolio",
  description:
    "It is the personal portfolio of Shiva Yadav made with the help of NextJS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
        <div className=" bg-primaryBackground text-primaryText overflow-x-hidden">
          <MenuProvider>

          <aside className="hidden md:flex md:fixed  md:left-0 md:top-0 h-screen md:w-72 p-2">
            <Sidebar />
          </aside>
          <main className="md:pl-72  min-h-screen  ">
            <Navbar/>
          {children}
          </main>
          <Toaster/>
          </MenuProvider>
        </div>
      </body>
    </html>
  );
}
