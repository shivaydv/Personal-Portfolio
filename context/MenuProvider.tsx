"use client"

import { createContext, useContext, useState } from "react"

const MenuContext= createContext({
    showMenu:false,
    setMenu:(option:boolean)=>{},
    
});

export const MenuProvider=({children}:{children:React.ReactNode})=>{

    const [showMenu,setShowMenu]= useState(false);

    const setMenu =(option:boolean)=>{
        setShowMenu(option);
    }

    return(
        <MenuContext.Provider value={{showMenu,setMenu}}>
            {children}
        </MenuContext.Provider>
    );
}

export const useMenu = ()=> useContext(MenuContext);
