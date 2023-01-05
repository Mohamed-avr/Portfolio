import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useState , useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Card from './Card';



const Projects = () => {

  const [windowWidth , setWindowWidht] = useState(false);
   useEffect(() => {

  console.log( window.screen.width);
  console.log( windowWidth );

  if(  window.screen.width < 600 ) {
        setWindowWidht(true) 

      } else {
       setWindowWidht(false);
      }
   });

    const projectsList = [
       { 
        
        'name': 'Project Name' , 
        'id': 1 ,
        'img': '/four.jpg',
        'dateFinished': '2002-01-01', 
        'state': 'real project',
        'link': 'P_1',
      } ,  
      { 
        
        'name': 'Project Name' , 
        'id': 2 ,
        'img': '/four.jpg',
        'dateFinished': '2002-01-01', 
        'state': 'real project',
        'link': 'P_2',
      } ,  
      { 
        
        'name': 'Project Name' , 
        'id': 3 ,
         'img': '/four.jpg',
        'dateFinished': '2002-01-01', 
        'state': 'real project',
        'link': 'P_3',
      } ,  

     

    ]

  
    return (
      <div className="flex justify-start flex-row mt-4 overflow-hidden ">
        <div className='flex flex-row flex-wrap w-full  '>
        { windowWidth ?  
        projectsList.map((e) => {
          return (
              <Card sendkey={e.id} sendImg={e.img} sendName={e.name} sendLink={e.link} />     
          )
        }) :
        <Swiper
        grabCursor={true}
        effect={"cards"}
       
        modules={[EffectCards]}
        className="mySwiper"
       >

        {  projectsList.map((e) => {
          return (
            <SwiperSlide> <Card sendkey={e.id} sendImg={e.img} sendName={e.name} sendLink={e.link} /> </SwiperSlide>
                 
          )
        })}
       
    
      </Swiper> 
        
        }
       
       
          
  
        </div>
      </div>
    )
}

export default Projects;
