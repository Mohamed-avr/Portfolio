import React  , { useEffect} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import emblaCarousel from 'embla-carousel';


const Projects = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false } );

    useEffect(() => {
      if (emblaApi) {
        // Embla API is ready
      }
    }, [emblaApi])
  
    return (
      <div className="flex justify-start flex-row bg-white " ref={emblaRef}>
        <div className=" flex justify-start flex-row  bg-black/25">
        <article className=" w-80 h-80 bg-nav text-center items-center justify-center flex text-3xl  hover:text-white m-2 hover:bg-body/60 hover:border-nav/50 hover:border-2  ">
            JS
          </article>
        </div>
      </div>
    )
}

export default Projects;
