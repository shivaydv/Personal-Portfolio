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
            <List link="/contact"  >
            <MessagesSquare /> Contact
            </List>
            <List link="/blogs"  >
                <PenSquare/> Blogs
            </List>

            <h1 className="py-4">Social</h1>

            <List link="https://www.instagram.com/shivay1256/"  >
                <Instagram color="#E4405F"/> Instagram
            </List>
            <List link="https://www.linkedin.com/in/shivaydv/"  >
                <Linkedin color="#0A66C2"/> Linkedin
            </List>
            
            <List link="https://github.com/Shivaydv/"   >
                <Github color="#3AAF85"/> Github
            </List>
            <List link="/"  >
                <Youtube color="#CD201F"/> Youtube
            </List>
            <List link="https://twitter.com/Shivay1256"  >
                <Twitter color="#1DA1F2"/> Twitter
            </List>
           
            
            

           
        </div>
        </div>
     );
}
 
export default Sidebar;