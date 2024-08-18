import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react';
import { project } from "~/classes/constantas/project";
import{ Enumsource, type ProjectList } from '~/interfaces/project/project-list';
import FsLightbox from 'fslightbox-react';
import Rsicon from '~/components/Rsicon';
 
export default function DetailProject() {
  const router = useRouter()
  const { slug } = router.query
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1
  });

  function openLightboxOnSlide(number:number) {
    setLightboxController({
        toggler: !lightboxController.toggler,
        slide: number
    });
}
  const projectDetail:ProjectList | undefined = project.find(p => p.slug === slug)
  if (!projectDetail) {
    return (
        <div className="flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-white">404</h1>
          <p className="mt-4 text-xl text-gray-200">Page Not Found</p>
          <p className="mt-2 text-gray-300">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link href="/" className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
            Go to Homepage
          </Link>
        </div>
      </div>
    )
  }
  const imageSources = projectDetail.Images.map(image => image.img);
  return (
    <div className='pt-6 px-6 pb-[72px]'>
      {projectDetail.source === Enumsource.Open && (
      <div className='pb-6'>
        <div className="flex gap-2 items-start flex-col text-white">
          <div className='flex gap-2 items-center pb-2'>
            <Rsicon icon="fab github" classname="h-6 w-6"></Rsicon>
            <h4 className="font-semibold text-2xl font-mono">{projectDetail.title}</h4>
          </div>
          <Link href={projectDetail.github} target='_blank' className="bg-sky-400 py-2 px-4 w-auto rounded flex items-center text-white font-bold">Visit &nbsp;&nbsp;<Rsicon classname="h-3 w-3" icon="fas long-arrow-alt-right"></Rsicon></Link>
        </div>
      </div>
    )}
      <FsLightbox toggler={lightboxController.toggler} sources={imageSources} slide={lightboxController.slide}/>
      <div className="grid grid-cols-2 gap-4">
        {projectDetail.Images.map((image, index)=>(
          <div key={index} className="relative">
            <Image alt={image.alt} src={image.img}  onClick={() => openLightboxOnSlide(index+1)} width={400} height={200} className="h-full object-cover"></Image>
          </div>
        ))}
      </div>
    </div>
  )
}