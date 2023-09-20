import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";
import { Users2 } from "lucide-react";
const Navbar = () => {
    return ( 
        <div className="w-full bg-primaryBackground   flex justify-end p-4 items-center max-md:gap-4">
            <Link
          href="/"         
        >
            <button disabled className="p-2 bg-green-900 text-white rounded-lg text-sm flex gap-1 justify-center items-center ">
            <Users2/>
          Contact me
            </button>
        </Link>
            <MobileMenu/>
        </div>
     );
}
 
export default Navbar;