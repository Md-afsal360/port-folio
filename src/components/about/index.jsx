import clsx from 'clsx'
import React from 'react'


const ItemLayout=({children,className})  => {
    return  <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center space-y-8',className)}>
   {children}
 </div>
}
const AboutDetails = () => {
  return (
    <section className='py-20 w-full '>
        <div className='grid grid-cols-12 gap-8 w-full'>

            <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
            <h2 className='text-2xl text-left w-full capitalize'>
               Architech of Enchantment
             </h2>
             <p className='font-light'>My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. I wield frameworks like React.js and Next.js with precision, crafting seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my design skills ensure every creation is not only functional but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.</p>

            </ItemLayout>

            <ItemLayout className={'col-span-4 text-accent'}>
            <div className='font-semibold w-full text-left text-5xl'>
                25+ <sub className='font-semibold text-base'>clients</sub>
             </div>
            </ItemLayout>

            <ItemLayout className={'col-span-4 text-accent'}>
             <div className='font-semibold w-full text-left text-5xl'>
                4+ <sub className='font-semibold text-base'>years of experience</sub>
             </div>
            </ItemLayout>

            <ItemLayout className={"col-span-4 !p-0"}>
                 <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/top-langs/?username=Md-afsal360&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Afsal-git' loading='lazy' />
            </ItemLayout>

            <ItemLayout className={"col-span-8 !p-0"}>
                 <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api?username=Md-afsal360&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Afsal-git' loading='lazy' />
            </ItemLayout>
             
            <ItemLayout className={"col-span-full"}>
                 <img className='w-full h-auto' src='https://skillicons.dev/icons?i=js,html,css,wasm,bootstrap,docker,figma,git,github,java,laravel,linkedin,materialui,mysql,mongodb,netlify,nextjs,nodejs,php,postgres,postman,react,spring,stackoverflow,svg,tailwind,threejs,twitter,ts,visualstudio,vite,vscode,webflow,webpack,windows' alt='Afsal-git' loading='lazy' />
            </ItemLayout>
             

            {/* <ItemLayout className={"col-span-6 !p-0"}>
               <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=Md-afsal360&theme=dark&hide_border=true&type=png&background=EB545400&ring=FEFE5B&currStreakLabel=FEFE5B" alt='Afsal-git' loading='lazy'/>
            </ItemLayout>

            <ItemLayout className={"col-span-6 !p-0"}>
                 {/* <img className='w-full h-auto' src=' https://github-readme-stats.vercel.app/api/pin?username=Md-afsal360&repo=TaskTrack-render &theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Afsal-git' loading='lazy' /> */}
                 {/* <img className='w-full h-auto' src='https://github-readme-stats.vercel.app/api/pin?username=Md-afsal360&repo=TaskTrack-render&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false' alt='Afsal-git' loading='lazy' /> */}

            {/* </ItemLayout> */}
             
            {/* https://github.com/Md-afsal360/TaskTrack-render */}
            
            
             
            </div>
    </section>
  )
}

export default AboutDetails