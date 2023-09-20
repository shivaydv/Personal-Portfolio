import {Home,User2,MessagesSquare,Twitter,Youtube,Linkedin,Github,Instagram,PenSquare} from "lucide-react";
import List from "@/components/List";

const Sidebar = () => {
    return ( 
        <div className="w-full md:p-1 ">

        <div className="w-full flex flex-col gap-1 md:p-6 bg-secondaryBackground h-full rounded-lg overflow-y-scroll">

            {/* Basic Routes  */}

            <List link="/"  >
                <Home/> Home
            </List>
            <List link="/about"  >
                <User2/> About
              
            </List>
            <List link="/"  >
            <MessagesSquare /> Contact
            </List>
            <List link="/"  >
                <PenSquare/> Blog
            </List>

            <h1 className="py-4">Social</h1>

            <List link="https://www.instagram.com/shivay1256/" target="_blank" >
                <Instagram color="#E4405F"/> Instagram
            </List>
            <List link="/"  >
                <Linkedin color="#0A66C2"/> Linkedin
            </List>
            
            <List link="/"  >
                <Github color="#3AAF85"/> Github
            </List>
            <List link="/"  >
                <Youtube color="#CD201F"/> Youtube
            </List>
            <List link="/"  >
                <Twitter color="#1DA1F2"/> Twitter
            </List>
           
            
            

           
        </div>
        </div>
     );
}
 
export default Sidebar;