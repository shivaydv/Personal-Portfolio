import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";


const MobileMenu = () => {
    return ( 
        <Sheet  >
            <SheetTrigger >
             <Menu className="md:hidden"/>
            </SheetTrigger>
            <SheetContent  className="bg-secondaryBackground   text-primaryText overflow-y-scroll " side={"left"} >
                <Sidebar/>   
            </SheetContent>
        </Sheet>
     );
} 
 
export default MobileMenu;