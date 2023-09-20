import { BatteryCharging, Bitcoin, Briefcase, CloudMoon, Headphones, ListTodo, LucideIcon, MessagesSquare, Store } from "lucide-react";

interface projectDataProps{
    id:number;
    name:string;     
    link:string;
    icon:LucideIcon;
    techstack:string;
    color:string;
}
export const projectdata:projectDataProps[] = [
    {
        id:0,
        name:"Portfolio",     
        link:'https://github.com/shivaydv/Personal-Portfolio',
        icon:Briefcase,
        techstack:`NextJS, TypeScript, Tailwind CSS, React, Shadcn `,
        color:'#6A00FF' ,
    },
    {
        id:1,
        name:"Chat App",     
        link:'https://github.com/shivaydv/Chat-app',
        icon:MessagesSquare,
        techstack:`React JS, Tailwind CSS, Node JS, Express, MongoDB`,
        color:'#09B83E' ,
    },
    {
        id:2,
        name:"Crypto App",     
        link:'https://github.com/shivaydv/Crypto-App',
        icon:Bitcoin,
        techstack:`React JS, Chakra UI, Axios`,
        color:'#FF6600' ,
    },
    {
        id:3,
        name:"Weather App",     
        link:'https://github.com/shivaydv/weather-app',
        icon:CloudMoon,
        techstack:`React JS, Tailwind CSS, Axios`,
        color:'#D80073' ,
    },
    {
        id:4,
        name:"E-Commerce Store",     
        link:'https://github.com/shivaydv/ecom',
        icon:Store,
        techstack:`React JS, Tailwind CSS, 0Auth, Context Api`,
        color:'#0050EF' ,
    },
    {
        id:5,
        name:"To Do List",     
        link:'https://github.com/shivaydv/To-Do-List',
        icon:ListTodo,
        techstack:`React JS, Tailwind CSS, Local Storage`,
        color:'#00ABA9' ,
    },
    {
        id:6,
        name:"Tesla Clone",     
        link:'https://github.com/shivaydv/Tesla',
        icon:BatteryCharging,
        techstack:`HTML, CSS, JAVASCRIPT`,
        color:'#F0A30A' ,
    },
    
    
]
