import { frontendData, skillProps } from "@/lib/Data";
import SkillCard from "./SkillCard";


const SkillList = ({ title,data }: { title: string ,data:skillProps[]}) => {
  return (
    <div>
      <h1 className="py-6 font-bold  text-lg">{title}</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 gap-5  ">
        {data.map((skill) => (
          <SkillCard key={skill.id} name={skill.name} src={skill.src} />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
