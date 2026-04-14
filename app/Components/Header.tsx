import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import { Manrope, Noto_Serif } from 'next/font/google';
import React from 'react'

const manrope = Manrope({ subsets: [ "latin" ], style: [ "normal" ] });
const notoSerif = Noto_Serif({ subsets: [ "latin" ], style: [ "normal", "italic" ] });

const Header = () => {
  return (
    <Navbar fluid rounded className={`w-full flex items-center bg-[#141414]! text-ylw ${notoSerif.className}`}>
      <NavbarBrand className='me-5'>
        <h1 className="italic">Culinary Shadow</h1>
      </NavbarBrand>
      <div className="flex md:order-2 ms-5 ">
        <Button className={`rounded-none bg-[#D42B3B]! ${manrope.className} text-sm tracking-[1.4px]`}>BOOK A TABLE</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" className='text-white'>Home</NavbarLink>
        <NavbarLink href="/menu" className='text-white'>Menu</NavbarLink>
        <NavbarLink href="/contact" className='text-white'>Contact</NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}

export default Header