import React from 'react';
import Product from '../components/Product';

const Products = () => {

    const products = [
        { 
            'name': 'product one', 
            'price': true ? '$30' : 'free', 
            'image':'/ProductsImages/ProductIm_1.jpg',
            'duplicated':'301', 
            'id':1,
        } ,
        { 
            'name': 'product one', 
            'price': true ? '$30' : 'free', 
            'image':'/ProductsImages/ProductIm_1.jpg',
            'duplicated':'301', 
            'id':1,
        }
    ];


    return (
        <div className='h-auto sm:pl-16 px-6  flex justify-start items-start flex-col mb-[15rem]'>
        <main className=' mt-40  text-green-600 flex sm:space-y-0 space-y-3 sm:space-x-3 sm:flex-row flex-col'>
          { products.map((e)=> {
           return (
              <Product key={e.id} pName={e.name} pPrice={e.price} pDup={e.duplicated} pImage={e.image}   />
           )
          }) }
             
            
        </main>
    </div>
    );
}

export default Products;
