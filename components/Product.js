import Image from "next/image";

const Product = (props) => {
    return (
        <div className=' text-white border-nav/50 border-2 '>
            <div className=" justify-center relative p-3  pb-0  ">
                 <div>
                 <Image src={props.pImage} width={350} height={180}  />
                 </div>
                
            </div>
            <div className="p-3 ">
                 <div className="flex  justify-between w-full bg-gray-50 "> 
                 name : {props.pName}            
            price : {props.pPrice}
                 </div>

            puplicated : {props.pDup}
            </div>
          
        </div>
    );
}

export default Product;
