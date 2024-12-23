import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MdOutlineCancel } from "react-icons/md";
import { LuMenu } from "react-icons/lu";



const navList = [{
    name: "home",
    path: "/"
},
    {
        name: "project",
        path: "/project"
    },
    {
        name: "about",
        path: "/about"
    },
    {
        name: "featured",
        path: "/featured"
    }
]

const Navbar = () => {

    const [isMenuOpen, setisMenuOpen] = useState(false);
    const toggleMenu = () => setisMenuOpen(!isMenuOpen);
  return (
<header className='bg-white py-6 border'>
    <nav className='container mx-auto flex justify-between px-5'>

    <a href='/'>
    <img src='/logo.png' alt='logo' className='h-12' /></a>

    <ul className='sm:flex hidden items-center gap-8' >
       {
        navList.map((listitem, index) => (
            <li key={index}>
                <NavLink 
                className={({ isActive}) =>
                    isActive
                      ? "active" : ""

                  }
                to={`${listitem.path}`} >{listitem.name}</NavLink>
            </li>
        ))
       }
       <li>
        <NavLink to='/login'>Login</NavLink>
       </li>
    </ul>

    {/* toggle menu */}

    <div className='flex items-center sm:hidden'>
        <button 
       onClick={toggleMenu} 
        className='flex items-center px-3 py-4 bg-[#fafafa] rounded text-sm text-gray-500
        hover:text-gray-500S'>{
            isMenuOpen ? <MdOutlineCancel className='sise-6'/> : <LuMenu />
            
        }</button>
    </div>
    </nav>

    {/* menu for mobile view */}
    {
        isMenuOpen && (
            <ul className='fixed top-[108px] md:hidden md:left-0 w-full h-auto pb-8 border-b bg-white shadow-sm z-50' >
       {
        navList.map((listitem, index) => (
            <li key={index} className='mt-5 px-4'>
                <NavLink 
                onClick={() => setisMenuOpen()}
                className={({ isActive}) =>
                    isActive
                      ? "active" : ""

                  }
                to={`${listitem.path}`} >{listitem.name}</NavLink>
            </li>
        ))
       }
       <li className='px-4 mt-5'>
        <NavLink to='/login'>Login</NavLink>
       </li>
    </ul>
        )}
</header>
)
}

export default Navbar