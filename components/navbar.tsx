"use client"

import Link from "next/link";

import { itemsNavbar } from "@/data";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";
import React from "react";

interface NavbarItemProps {
    item: {
      id: number; // Actualizado para aceptar un número
      link: string;
      icon: JSX.Element;
    };
    router: string;
  }
  
  const NavbarItem: React.FC<NavbarItemProps> = ({ item, router }) => (
    
    <Link href={item.link}
      key={item.id.toString()} // Convierte el id a string para usarlo como key
      className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${router === item.link && 'bg-secondary'}`}
      data-tooltip-target="tooltip-default">
     {item.icon}
    </Link>
  );
  

const Navbar = () => {
    const router = usePathname();
    console.log(router)

    return (
        <div className="fixed z-40 flex flex-col items-center justify-center w-full mt-auto h-max bottom-2">
            <nav>
                <div className="flex items-center justify-center gap-2 px-4 py-1 rounded-full bg-white/15 background-blur-sm">
                    {itemsNavbar.map((item) => (
                        <NavbarItem key={item.id} item={item} router={router} />
                    ))}
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
