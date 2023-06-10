import React, { useEffect, useState } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

import {IoMdHeartEmpty} from 'react-icons/io';
import {BsCart} from 'react-icons/bs';
import {BiMenuAltRight} from 'react-icons/bi';
import {VscChromeClose} from 'react-icons/vsc';
import { eslint } from '@/next.config';

const Header = () => {
    const[mobileMenu, SetMobileMenu]=useState(false);
    const[showCartMenu, SetShowCartMenu]=useState(false);
    const[show, SetShow]=useState("translate-y-0");
    const[lastScrollY, SetLastScrollY]=useState(0);
    
    const controlNavbar = ()=>{
        if(window.scrollY > 200){
            if(window.scrollY > lastScrollY){
                SetShow('-translate-y-[80px]')
                
            }else{
                SetShow("shadow-sm")
            }

        }else{
            SetShow('translate-y-0')
        }
        SetLastScrollY(window.scrollY)
    }

    useEffect(()=>{
        window.addEventListener("scroll", controlNavbar);
        return ()=>{
            window.removeEventListener("scroll", controlNavbar)
        }
    },[lastScrollY])


  return (
    <header className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between
    z-20 sticky top-0 transition-transform duration-300 ${show}`}>
    
    <Wrapper className='h-[160px] flex justify-between items-center'>
      <Link href='/'>
      <img src='/logo.svg' className='w-[40px] md:w-[60px]'/>
      </Link>
      <Menu showCartMenu={showCartMenu} SetShowCartMenu={SetShowCartMenu}/>
      
      {/* <MenuMobile showCartMenu={showCartMenu} SetShowCartMenu={SetShowCartMenu} SetMobileMenu={SetMobileMenu}/> */}
      {mobileMenu && (
      <MenuMobile 
      showCartMenu={showCartMenu} 
      SetShowCartMenu={SetShowCartMenu} 
      SetMobileMenu={SetMobileMenu}
      /> )}
      
      <div className='flex items-center gap-2 text-black'>
      {/* Icon Start  */}
      <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
          <IoMdHeartEmpty className='text-[15px] md:text-[20px]'/>
          <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
          text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]' >15</div>
        </div>
      
        <Link href='/cart'>
        <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center items-center hover:bg-black/[0.05] cursor-pointer relative'>
          <BsCart className='text-[15px] md:text-[20px]'/>
          <div className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 absolute top-1 left-5 md:left-7 text-white
          text-[10px] md:text-[12px] flex justify-center items-center px-[2px] md:px-[5px]' >5</div>
        </div>
        </Link>

      {/* Icon end  */}
      
      {/* Mobile Icon Start  */}
    <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2'>
      {/* {mobileMenu ? (): ()} */}
      {mobileMenu ? (
        <VscChromeClose className='text-[16px]'
          onClick={()=> SetMobileMenu(false)}
        />
      ): (
        <BiMenuAltRight className='text-[20px]'
        onClick={()=> SetMobileMenu(true)}
      />
      )}
    </div>
    {/* Mobile Icon end  */}

      </div>

    </Wrapper>
    </header>
  )
}

export default Header