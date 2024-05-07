import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navlinks from './Navlinks'
import Profile from './Profile'
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";


const Navbar = () => {

  const [open, setOpen] = useState(false)



  return (
    <nav className='bg-transparent'>
      <div className='flex items-center font-medium justify-center  '>
        <div className='z-50 p-5 lg:w-auto w-full flex  justify-between'>
          <Link to='/'>
          <img src="img/logo.png" alt="logo" className='md:cursor-pointer h-8 w-40' />
          </Link>
          <div className="lg:hidden text-3xl" onClick={() => setOpen(!open)}>
            {
              open ?  <RxCross1 />  :  <RxHamburgerMenu  />

            }

          </div>
        </div>
        <ul className='lg:flex hidden uppercase items-center gap-8  font-bold  font-open'>
          <li>
            <Link to='/' className='py-7 px-3 inline-block  hover:text-[#503691] focus:bg-[#503691]  focus:text-white'>Home</Link>
          </li>
          <Navlinks/>

        </ul>

        <div className="hidden lg:block  ">
          <span className=''>
          <Profile/> 
          </span>         
        </div>

      {/* mobile-nav */}
      

        <ul className={
          `
          lg:hidden  bg-white absolute w-full h-full bottom-0 py-24 pl-4  duration-500 ${open ? 'left-0' : 'left-[-100%]'}
          `
        }>
         <li>
            <Link to='/' className='py-7 px-3  inline-block'>Home</Link>
          </li>
          <Navlinks/>
          <div className="py-5"> 
               <Profile/>
          </div>
          
        </ul>


      </div>
      
      
    </nav>
  )
}

export default Navbar
