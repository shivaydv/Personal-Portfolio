import { LucideIcon, Ticket } from "lucide-react";
import Link from "next/link";
import React from "react";

interface projectCardProps {
    name:string;     
    link:string;
    icon:LucideIcon;
    techstack:string;
    color:string;
}

const ProjectCard:React.FC<projectCardProps> = ({name,icon,link,techstack,color}) => {
    return ( 
        <div className="p-2 bg-secondaryBackground rounded-lg">

        <Link href={link} className="flex  items-center gap-3 ">
            <section className={` w-20 h-20 flex justify-center items-center rounded-lg `} style={{backgroundColor:color}}>
            {React.createElement(icon, { size: 30, color: "white" })}
            </section>
            <section className="space-y-1 flex-1">
                <h1 className="text-white font-semibold">{name}</h1>
                <p className="text-sm">{techstack}</p>
            </section>

        </Link>
        </div>
     );
}
 
export default ProjectCard;