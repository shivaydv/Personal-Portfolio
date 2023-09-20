import MobileMenu from "@/components/MobileMenu";





const Navbar = () => {
    return ( 
        <div className="md:hidden w-full flex justify-end p-4 items-center max-md:gap-4">
            <MobileMenu/>
        </div>
     );
}
 
export default Navbar;