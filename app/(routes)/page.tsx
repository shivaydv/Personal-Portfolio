import Cover from "@/components/Cover";
import Navbar from "@/components/Navbar";
import ProjectList from "@/components/ProjectList";



export default function Home() {
  return (
    <>
    <div className="p-2 ">
      <Cover/>
      <section className="md:px-10  px-4 pb-4 ">
        <ProjectList/>
      </section>
    </div>
    </>
  )
}
