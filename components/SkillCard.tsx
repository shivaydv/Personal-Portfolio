import Image from "next/image";

const SkillCard = ({name,src}:{name:string,src:string}) => {
    return ( 
        <div className=" flex flex-col gap-2 pb-2">
            <div className="relative aspect-video">
                
            <Image fill  className="object-cover rounded-lg" src={src} alt={name} />
            </div>
            <h1 className=" text-white font-semibold text-sm">{name}</h1>
        </div>
     );
}
 
export default SkillCard;