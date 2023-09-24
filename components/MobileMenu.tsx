"use client";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";
import { useMenu } from "@/context/MenuProvider";

const MobileMenu = () => {
  const { setMenu, showMenu } = useMenu();

  return (
    <div className="relative ">
      <Menu onClick={() => setMenu(true)} className="md:hidden" />
      <section
        onClick={() => setMenu(false)}
        className={`md:hidden top-0 left-0 z-[98] fixed w-screen h-screen backdrop-blur-sm ${
          showMenu ? "flex" : "hidden"
        }`}
      ></section>
      <aside
        onClick={() => setMenu(false)}
        className={`md:hidden sm:w-[50%] w-[70%] bg-secondaryBackground   text-primaryText overflow-y-scroll h-screen  fixed z-[99] left-0 top-0 flex-col ${
          showMenu ? "flex " : "hidden"
        }`}
      >
        <div className="p-4">

        <div className="flex justify-end">
          <X className=" justify-end" />
        </div>
        <Sidebar />
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
