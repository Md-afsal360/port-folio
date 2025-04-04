import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
import Crown from "@/components/models/Crown";
import AboutDetails from "@/components/about";
export default function Home() {
  return (
    <>
      <Image src={bg} alt="background image"  className=" -z-50 w-full h-full fixed top-0 left-0 object-cover object-center opacity-25"/>
      
     
        
        <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/3 -translate-y-1/2 -left-1">
        <RenderModel>
          <Crown />
         </RenderModel>
        </div>

        <div className="relative w-full h-screen flex flex-col items-center justify-center"> 
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[40%]  left-1/2 -translate-x-1/3 sm:-translate-x-1/2">
          <h1 className="font-bold text-6xl xs:text-7xl sm:text-8xl lg:text-9xl text-accent">MOHAMED AFSAL</h1>
          <p className="font-light text-foreground text-lg">Meet the magician behind this portfolio</p>
        </div>
        </div>

        <AboutDetails />
      
    </>
  );
}