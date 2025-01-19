import Image from 'next/image'
import React from 'react'

export default function Header() {
  return (
    <div className='flex items-center justify-center '>
        <Image
            src='/logo.png'
            width={22}
            height={36} 
            alt={'rock logo'} 
            className='mt-[12px]'   
        />
        <h1 
            className="text-4xl font-black ml-2" 
            style={{
                fontSize: '40px',
                lineHeight: '48.41px'
            }}
        >
            <span className="text-[#4EA8DE] mr-2">Todo</span>
            <span className="text-[#5E60CE]">App</span>
        </h1>
    </div>
  )
}
// 736 w create task button, h-52px. radius- 8px-padding 16px, text color - #1E6F9F, top 173px
// 
// width: Hug (52px)px;
// height: Hug (19px)px;
// padding: 2px 8px 2px 8px;
// gap: 10px;
// border-radius: 999px 0px 0px 0px;
// opacity: 0px;
