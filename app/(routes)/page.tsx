import Cover from "@/components/Cover";
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";
import SkillList from "@/components/SkillList";
import { backendData, database, devops, frontendData, others } from "@/lib/Data";



export default function Home() {
  return (
    <>
    <div className="p-2 ">
      <Cover/>
      <section className="md:px-10  px-4 pb-4 ">
        <ProjectList/>
        <SkillList title="Frontend" data={frontendData}/>
        <SkillList title="Backend" data={backendData}/>
        <SkillList title="Database" data={database}/>
        <SkillList title="DevOps" data={devops}/>
        <SkillList title="Others" data={others}/>
      </section>
    </div>
    </>
  )
}
