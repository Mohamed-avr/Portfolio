import React  , { useEffect} from 'react';



const Projects = () => {


    const projectsList = [
       { 
        
        'name': 'Project Name' , 
        'dateFinished': '2002-01-01', 
        'state': 'real project',
      } , 
      { 
        
        'name': 'Project Name' , 
        'dateFinished': '2002-01-01', 
        'state': 'real project',
      } , 
      { 
        
        'name': 'Project Name' , 
        'dateFinished': '2002-01-01', 
        'state': 'real project',
      } , 
      { 
        
        'name': 'Project Name' , 
        'dateFinished': '2002-01-01', 
        'state': 'real project',
      } , 
     

    ]

  
    return (
      <div className="flex justify-start flex-row mt-4 overflow-hidden ">
       

        <div className='flex flex-row flex-wrap w-full  '>
         

        { projectsList.map( (e) => {
          return (
            <article className=" sm:w-[24.7rem] h-[23rem] p-4 relative  text-center flex-col items-center justify-start flex text-3xl  text-white m-2  border-nav/50 border-2  ">
              <div className=' w-[95%] h-[13rem] mt-1 bg-slate-100 rounded-xl  '>

              </div>
              <h3 className='mt-4 text-lg  '>  {e.name} </h3>
              <button className=' rounded-full hover:bg-buttons/10  absolute text-lg  left-5 bottom-4 bg-buttons  w-[90%] h-16 flex justify-center items-center '>
                          visit now
              </button>
          </article>
          )
        }) }
  
        </div>
      </div>
    )
}

export default Projects;
