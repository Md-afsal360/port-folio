import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import Sword from "@/components/models/Sword";
export default function Home() {
  return (
    <>
      <Image src={bg} alt="background image"  className=" -z-50 w-full h-full fixed top-0 left-0 object-cover object-center opacity-25"/>
      
      <ProjectList projects={projectsData} />
        
        <div className="flex items-center justify-center fixed top-20 -left-5 h-screen">
        <RenderModel>
          <Sword />
         </RenderModel>
        </div>
      
    </>
  );
}