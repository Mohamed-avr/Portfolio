import Image from "next/image";
import Link from "next/link";

const Product = (props) => {


  const priceHandling = props.pPrice;
  console.log(priceHandling);

  return (
    <div className=' text-texts border-nav/50 border-2 '>
      <div className=" justify-center relative p-3  pb-0  ">
        <div>
          <Image src={props.pImage} width={350} height={180} />
        </div>

      </div>
      <div className="p-3 ">
        <div className="flex  justify-between w-full items-center  py-2 ">
          <h4 className='font-bold'> {props.pName}    </h4>
          <div className="flex">
            <div className='px-3 py-2  flex justify-center flex-row bg-nav rounded-full mr-2  '>
              <h5 className="px-[2px]"> 180</h5>
               <Image className=" text-texts " src={'/icons/Download.png'} width={22} height={18} />
            </div>

            {props.pPrice == 'free' ?
              <span className='px-4 py-2 text-white capitalize mr-1  bg-green-600 rounded-full '> {props.pPrice}</span>
              : <span className='px-3 py-2  text-white capitalize mr-1  bg-pink-600  rounded-full '> Price : {props.pPrice}</span>}


          </div>
        </div>

        {props.pPrice == 'free' ?
              <div className="flex  justify-between w-full items-center py-2 ">
              <Link href={props.pLink}>
                <button className=" bg-nav hover:bg-nav/5 hover:border-2 hover:border-nav rounded-full  w-[100%] h-16 flex justify-center items-center mt-2" > Duplicate now </button>
              </Link>
            </div>  
              : <div className="flex  justify-between w-full items-center py-2 ">
              <Link href={props.pLink}>
                <button className=" bg-nav hover:bg-nav/5 hover:border-2 hover:border-nav rounded-full  w-[100%] h-16 flex justify-center items-center mt-2" > Buy now </button>
              </Link>
            </div>  }
       


      </div>

    </div>
  );
}

export default Product;
