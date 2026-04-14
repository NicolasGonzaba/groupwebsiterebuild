import { Noto_Serif } from 'next/font/google';
import React from 'react'

const notoSerif = Noto_Serif({ subsets: [ "latin" ], style: [ "normal", "italic" ] });

const WebFooter = () => {
    return (
        <div className='flex flex-row justify-between text-gray-600 w-full p-10'>

            <div>
                <h1 className={`${notoSerif.className} text-ylw text-2xl mb-8`}>Culinary Shadow</h1>
                <p className="mb-4 text-sm tracking-[1.4px]">TOKYO | NEW YORK | PARIS</p>
                <p className="text-sm tracking-[1.4px]">CONTACT@CULINARYSHADOW.COM</p>
            </div>
            <div className='flex flex-col gap-4 text-sm tracking-[1.4px]'>
                <p>PRIVACY POLICY</p>
                <p>TERMS OF SERVICE</p>
                <p>CAREER</p>
                <p>PRESS KIT</p>
            </div>

            <div className='flex items-end text-end text-sm tracking-[1.4px]'>
                <h3>© 2024 CULINARY SHADOW. ALL RIGHTS RESERVED.</h3>
            </div>
        </div>
    )
}

export default WebFooter