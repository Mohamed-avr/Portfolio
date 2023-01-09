import Image from "next/image";
import Link from "next/link";

const Product = (props) => {


     const linkHandling = props.PLink; 
     console.log(linkHandling);
    return (
        <div className=' text-white border-nav/50 border-2 '>
            <div className=" justify-center relative p-3  pb-0  ">
                 <div>
                 <Image src={props.pImage} width={350} height={180}  />
                 </div>
                
            </div>
            <div className="p-3 ">
                 <div className="flex  justify-between w-full items-center  py-2 "> 
                  <h4 className='font-bold'> {props.pName}    </h4>         
                    <div>
                    <span className='px-3 py-2  bg-nav rounded-full mr-2 '> 35</span>
                    <span className='px-3 py-2 bg-nav rounded-full '> Price : {props.pPrice}</span>
                    
                    </div>
                 </div>

                 <div className="flex  justify-between w-full items-center py-2 "> 
                  <Link href={`https://mostaql.com/portfolio/1153318-%D8%B7%D8%A8%D9%8A%D8%A8%D9%8A`}> 
                    <button className=" bg-nav rounded-full  w-[100%] h-16 flex justify-center items-center mt-2" > Duplicate now </button>
                  </Link>
                 </div>

           
            </div>
          
        </div>
    );
}

export default Product;
