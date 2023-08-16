import React, { useState } from 'react'
import { HiBars3BottomRight, HiXMark } from "react-icons/hi2";
import MenuOverlay from './MenuOverlay';

function Header() {

    const [toggle, setToggle] = useState(false)
    const menuList=[
        {
            id:0,
            title: 'HOME'
        },
        {
            id:1,
            title: 'ABOUT'
        },
        {
            id:2,
            title: 'SERVISE'
        },
        {
            id:3,
            title: 'PORTFOLIO'
        },
        {
            id:4,
            title: 'CONTACT'
        },
    ]
  return (
    <div className='flex items justify-between'>
        <div>
            <h2 className='text-[24px] font-bold text-white'>VITALII  
            <span className='text-red-500'>  SHOSTAK</span></h2>
        </div>
        <div className='hidden md:flex gap-4'>
            {menuList.map((item)=>(
                <div key={item.id}>
                    <h2 className='text-white
                    hover:border-[1px] border-red-500 rounded-full
                    text-[15px] px-3 py-1 cursor-pointer'>{item.title}</h2>
                </div>
            ))}
            <h2 className='text-white
                    hover:border-[1px] border-red-500 rounded-full
                    text-[15px] px-3 py-1 cursor-pointer
                    hover:bg-gradient-to-r from-red-500 to-red-800 '>Hire Me</h2>
        </div>
        <div className=' md:hidden'>
            {!toggle? <HiBars3BottomRight onClick={()=> setToggle(!toggle)} className='text-white text-[22px] '/>
            : <HiXMark onClick={()=> setToggle(!toggle)} className='text-white text-[22px] '/>}
            {toggle?<MenuOverlay menuList={menuList}/>:null}
        </div>
    </div>
  )
}

export default Header
