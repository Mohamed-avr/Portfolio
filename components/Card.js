import Link from 'next/link';
import Image from 'next/image';

const Card = (props) => {
    return (
             <article className=" sm:w-[24.7rem] w-[95%] h-[23rem] p-4 relative  text-center flex-col items-center justify-start flex text-3xl  text-white m-2 bg-nav  border-nav/50 border-2  ">
                <div className=' w-[95%] h-[13rem] mt-1 bg-slate-100 rounded-xl overflow-hidden   '>
                    <Image  alt={`imageN${props.sendkey}`} src={props.sendImg} width={600} height={600} />
                </div>
                <h3 className='mt-4 text-lg  '>  {props.sendName} </h3>
                <Link href={'/p_projects_shows/' + props.sendLink}> 
                <button className=' rounded-full hover:bg-buttons/10  absolute text-lg  left-5 bottom-4 bg-buttons  w-[90%] h-16 flex justify-center items-center '>
                  visit now
                </button>
                </Link>


              </article>
    );
}

export default Card;
