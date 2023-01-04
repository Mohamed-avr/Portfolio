import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProjectOne = () => {
    return (
        <div className='h-auto sm:pl-16 px-6  flex justify-start items-start flex-col mb-[15rem]'>
            <main className=' mt-40'>
                {/* information  */}
                <div className=''>
                    <h3 className='text-3xl font-bold text-texts capitalize '> heading : project name  </h3>
                    <h4 className='text-xl mt-4 text-texts '> state : <span className='text-green-400'> real project</span> </h4>

                </div>

                {/* all detailes */}
                <div className='bg-slate-200/5 text-texts/95 mt-10 p-4'>
                    <h3 className='font-bold text-lg capitalize '> about </h3>

                    say hi to blabla design !! first what is bla bla design it's a new design for a client helping sick people
                    it helps doctors and nurses to atchive their goals by helping sick people doctors and nurses to atchive their goals by helping sick people

                </div>


                {/* projects preview  */}
                <div className='mt-6 flex justify-start sm:flex-row   flex-col'>
                    <Image alt={`previw-1`} src={'/four.jpg'} width={800} height={800} />
                </div>

                <div className='bg-slate-200/5 text-texts/95 mt-6 p-4'>
                    say hi to blabla design !! first what is bla bla design it's a new design for a client helping sick people
                    it helps doctors and nurses to atchive their goals by helping sick people doctors and nurses to atchive their goals by helping sick people
                </div>


                <div className='mt-6 flex justify-start sm:flex-row items-start sm:space-x-2  flex-col'>
                    <div>
                        <Image className='' alt={`previw-1`} src={'/four.jpg'} width={340} height={340} />
                    </div>
                    <div>
                        <Image className='' alt={`previw-1`} src={'/four.jpg'} width={340} height={340} />
                    </div>
                    <div>
                        <Image className='' alt={`previw-1`} src={'/four.jpg'} width={340} height={340} />
                    </div>
                </div>

                <Link href={'behance.com'}>
                    <button className=' bg-blue-600 hover:bg-blue-600/50 mt-3 h-16 px-6 rounded-full flex justify-center items-center  text-texts '> 
                        the project on behance 
                    </button>
                </Link>



            </main>
        </div>
    );
}

export default ProjectOne;
