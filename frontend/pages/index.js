import HeroBanner from "@/components/HeroBanner";
import ProductCart from "@/components/ProductCart";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home({products}) {
  
  // const [data, setData] = useState(null);
  // useEffect(()=>{
  //   fetchProducts( )
  // },[])

  // const fetchProducts = async ()=>{
  // const {data} = await fetchDataFromApi('/api/products')
  // setData(data)
  // }
  return (
    
      <main className="">
        <HeroBanner/>
        {/* <h1>{products?.data?.[0]?.attributes?.name}</h1> */}
        <Wrapper>
          <div className="text-center msx-w-[800px] mx-auto my-[50px] md:my-[80px] ">
          <div className="font-semibold leading-tight">
          Cushioing for your Miles
        </div>
        <div className="text-md md:text-xl">
        React Responsive Carousel. Latest version: 3.2.23, last published: a year ago. Start using react-responsive-carousel in your project by running `npm i react 
        </div>
          </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
        {products?.data?.map((product)=>{
          <ProductCart key={product?.id} data={product} />
        })}
        {/* <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/>
        <ProductCart/> */}
        </div>

        </Wrapper>
      </main>
      
     
  )
  }``

  export async function getStaticProps(){
  const products = await fetchDat``aFromApi("/api/products?populate=*");
  return{
    props: {products}
  }