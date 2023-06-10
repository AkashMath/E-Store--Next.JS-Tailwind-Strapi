import React from 'react'
import Wrapper from '@/components/Wrapper';
import ProductCart from '@/components/ProductCart';

const Category = () => {
  return (
   <div className='w-full md:py-20'>
    <Wrapper>
    <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
        <div className='text-[20px] md:text-[34px] mb-5 font-semibold leading-tight'>
            Running Shoes 
        </div>
    </div>
{/* product grid Start */}
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        </div> 

{/* product grid end */}

    </Wrapper>
   </div>
  )
}

export default Category;