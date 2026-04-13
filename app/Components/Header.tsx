import { Button, Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from 'flowbite-react'
import React from 'react'

const Header = () => {
  return (
    <Navbar fluid rounded className='w-full flex items-center  bg-black text-yellow-300'>
      <NavbarBrand className='me-5'>
        <h1 className='italic '>Culinary Shadow</h1>
      </NavbarBrand>
      <div className="flex md:order-2 ms-5 ">
        <Button className='rounded-none bg-red-600 '>BOOK A TABLE</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" className='text-white'>
          Home
        </NavbarLink>
        <NavbarLink href="#" className='text-white'>Menu</NavbarLink>
        <NavbarLink href="#" className='text-white'>Contact</NavbarLink>

      </NavbarCollapse>
    </Navbar>
  )
}

export default Header