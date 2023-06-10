import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Wrapper from '@/components/Wrapper'
import CartItem from '@/components/CartItem';


const Cart = () => {
  return (
    <div className='w-full md:py-20'>
    <Wrapper>
    {/* Heading and Paragraph Start */}
    <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0'>
        <div className='text-[28px] md:text-[34px] mb-5 font-semibold leading-tight'> Shopping Cart</div>
    </div>

    {/* Heading and Paragraph end */}

    {/* cart content start  */}
    <div className='flex flex-col lg:flex-row gap-12 py-10'>
        {/* cart Items Start */}
        <div className='flex-[2]'>
        <div className='text-lg font-bold'>Cart Item</div>
        <CartItem/>
        <CartItem/>
        <CartItem/>
        </div>
        {/* cart Items end */}

        {/* cart summary strat  */}
        <div className='fllex-[1]'>
        <div className='text-lg font-bold'>summary</div>

        <div className='p-5 my-5 bg-black/[0.05] rounded-xl'>
            <div className='flex justify-between'>
                <div className='uppercase text-md md:text-lg font-medium text-black'>Subtotal</div>
                <div className='text-md md:text-lg font-medium text-black'>₹ 1800.00</div>
            </div>
        <div className='text-sm md:text-md py-5 border-t mt-5'>
        The Indian rupee (symbol: ₹; code: INR) is the official currency in the Republic of India. The rupee is subdivided into 100 paise 
        (singular: paisa), though as of 2023, coins of denomination of 1 rupee are the lowest value in use whereas 2000 rupees is the highest.
         The issuance of the currency is controlled by the Reserve Bank of India. The Reserve Bank manages currency in India and deriv
        </div>
        </div>

        {/* button start  */}
        <button className='w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 
        hover:opacity-75'> Checkout</button>
        {/* button end */}
        </div>
        {/* cart summary end  */}

    </div>
    {/* cart content end  */}


    {/* this is empty screen  */}
    {/* <div className='flex-[2] flex flex-col items-center pb-[50px] md:-mt-14'>
        <Image src='/empty-cart.jpg' width={300} height={300} className='w-[300px] md:w-[400px]'/>
        <span className='text-xl font-bold'>Your cart is empty </span>
        <span className='text-center mt-4'>
        Looks like you have not added anything in your cart.<br/>
        Go ahead and explore top Category. 
        </span>
        <Link href='/' className='py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3
        hover:opacity-75 mt-8'>
            Continue Shopping
        </Link>
    </div> */}
    </Wrapper>
    </div>
  )
}

export default Cart