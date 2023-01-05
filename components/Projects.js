import Link from 'next/link';
import Image from 'next/image';
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper";
import Card from './Card';



const Projects = () => {

  const [sizeScreen, setSizeScreen] = useState(false);
  useEffect(() => {

    console.log(window.screen.width);
    console.log('the state is' + sizeScreen);

    if (window.screen.width <= 600) {
      setSizeScreen(true)

    } else {
      setSizeScreen(false);
    }
  }, [sizeScreen]);

  const projectsList = [
    {

      'name': 'Project Name',
      'id': 1,
      'img': '/four.jpg',
      'dateFinished': '2002-01-01',
      'state': 'real project',
      'link': 'P_1',
    },
    {

      'name': 'Project Name',
      'id': 2,
      'img': '/four.jpg',
      'dateFinished': '2002-01-01',
      'state': 'real project',
      'link': 'P_2',
    },
    {

      'name': 'Project Name',
      'id': 3,
      'img': '/four.jpg',
      'dateFinished': '2002-01-01',
      'state': 'real project',
      'link': 'P_3',
    },
    {

      'name': 'Project Name',
      'id': 4,
      'img': '/four.jpg',
      'dateFinished': '2002-01-01',
      'state': 'real project',
      'link': 'P_4',
    },
    {

      'name': 'Project Name',
      'id': 5,
      'img': '/four.jpg',
      'dateFinished': '2002-01-01',
      'state': 'real project',
      'link': 'P_5',
    },



  ]


  return (
    <div className="flex justify-start flex-row mt-4 overflow-hidden ">
      <div className='flex flex-row flex-wrap w-full  '>
        {windowWidth ?
          <Swiper
            grabCursor={true}
            effect={"cards"}

            modules={[EffectCards]}
            className="mySwiper"
          >
            {projectsList.map((e) => {
              return (
                //sendkey={e.id}
                <SwiperSlide key={e.key} > <Card  sendImg={e.img} sendName={e.name} sendLink={e.link} /> </SwiperSlide>

              )
            })}
          </Swiper>
          :

          projectsList.map((e) => {
            return (
              <Card key={e.id}  sendImg={e.img} sendName={e.name} sendLink={e.link} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects;
