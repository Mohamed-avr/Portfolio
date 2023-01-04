import Link from 'next/link';
import Image from 'next/image';



const Projects = () => {


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
         
          {projectsList.map((e) => {
            return (
              <article key={e.id} className=" sm:w-[24.7rem] w-[95%] h-[23rem] p-4 relative  text-center flex-col items-center justify-start flex text-3xl  text-white m-2  border-nav/50 border-2  ">
                <div className=' w-[95%] h-[13rem] mt-1 bg-slate-100 rounded-xl overflow-hidden   '>
                    <Image  alt={`imageN${e.id}`} src={e.img} width={600} height={600} />
                </div>
                <h3 className='mt-4 text-lg  '>  {e.name} </h3>
                <Link href={'/p_projects_shows/' + e.link}> 
                <button className=' rounded-full hover:bg-buttons/10  absolute text-lg  left-5 bottom-4 bg-buttons  w-[90%] h-16 flex justify-center items-center '>
        
                  visit now
                </button>
                </Link>


              </article>
            )
          })}
  
        </div>
      </div>
    )
}

export default Projects;
