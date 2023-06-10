import React from "react";
import Wrapper from "@/components/Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import ProductDetailsCarousel from "@/components/ProductDetailsCarousel";
import RelatedProduct from "@/components/RelatedProduct";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          {/* left column start  */}
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
           <ProductDetailsCarousel/>

          </div>
          {/* left column end  */}

          {/* right column start  */}
          <div className="flex-[1] py-3">
            
            {/* product TITLE */}
            <div className="text-[34px] font-semibold mb-2"> Jorden Retro 6 6</div>

            {/* product Subtitle  */}
            <div className="text-lg font-semibold mb-5"> Men&apos; s Golf Shoes</div>

            {/* product price  */}
            <div className="text-lg font-semibold">MRP : ₹ 1800.00</div>
            <div className="text-md font-medium text-black/[0.5]">incl. of taxes</div>

            <div className="text-md font-medium text-black/[0.5] mb-20 ">
              {`(Also includes all applicable duties )`}
            </div>
            {/* product SIZE RANGE Start */}
          <div className="mb-10">
            {/* HEADING START  */}
            <div className="flex justify-between mb-2">
              <div className="text-md font-semibold">
                Select Size
              </div>
              <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                Select Guide
              </div>
            </div>
            {/* HEADING END  */}

            {/* Size start */}
            <div className="grid grid-cols-3 gap-2">
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"> UK 6</div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"> UK 6.5</div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"> UK 7</div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"> UK 7.5</div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"> UK 8</div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"> UK 8.5</div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"> UK 9</div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer"> UK 9.5</div>
              <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-not-allowed bg-black/[0.1] opacity-50"> UK 10</div>
            </div>
            {/* Size end */}

            {/* SHOW ERROR START */}
            <div className="text-red-600 mt-1">
              Size selection is required
            </div>
            {/* SHOW ERROR end */}
          </div>
            {/* product SIZE RANGE end */}


            {/* ADD to cart button stort  */}
            <button className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 
            hover:opacity-75"> Add to Cart</button>
            
            <button className="w-full py-4 rounded-full bg-white text-black border border-black text-lg font-medium transition-transform active:scale-95 
            hover:opacity-75 mb-10 flex items-center justify-center gap-2"> Whishlist
             <IoMdHeartEmpty size={20}/>
            </button>
            {/* ADD to cart button end  */}


          <div>
            <div className="text-lg font-bold mb-5"> Product Details</div>
            <div className="text-md mb-5">
            The symbol for Indian Rupee is ₹. It was designed by D. Udaya Kumar and was presented to the public by the Government of India on 
            15 July 2010 following its selection through an open competition among Indian residents1. The symbol is an amalgam of Devanagari
             “Ra” and the Roman Capital “R” with two parallel horizontal stripes running at the top representing the national flag and also the 
             “equal to” sign
            </div>
          </div>
          </div>
          {/* right column end  */}
        </div>
        <RelatedProduct/>
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
