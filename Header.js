/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
// import HeaderButton from './HeaderButton';
import Sidebar from './Sidebar';

const Header = () => {
    const [clicked , setClicked] = useState(false) ; 

    const clickhandler =() =>{
        setClicked(!clicked) ; 
    }
  return (
    <div>
      <header className="p-4 dark:bg-[#111827] dark:text-gray-100 sticky top-0 border-b-0 border-black ">
	<div className="container flex justify-between h-16 mx-auto md:justify-center md:space-x-8 sticky top-0 ">
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a  href="#services" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:dark:border-violet-400">Services</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#about" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:dark:border-violet-400">About</a>
			</li>
			{/* <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:dark:border-violet-400">Partners</a>
			</li>
            <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:dark:border-violet-400">Partners</a>
			</li> */}
		</ul>
        <img src="https://tech2globe.com/images/new-page-image/tech2globe-logo.webp" alt="Logo" />
		<ul className="items-stretch hidden space-x-3 md:flex">
			<li className="flex">
				<a rel="noopener noreferrer" href="#partners" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:dark:border-violet-400">Partners</a>
			</li>
			<li className="flex">
				<a rel="noopener noreferrer" href="#testimonials" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:dark:border-violet-400">Testimonials</a>
			</li>
			{/* <li className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent hover:text-violet-400 hover:dark:border-violet-400">Link</a>
			</li> */}
		</ul>
        <button title="Button" type="button" className="p-4 md:hidden" onClick={clickhandler}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
				<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
        {
            clicked && <Sidebar/>
        }
	</div>
</header>
    </div>
  )
}

export default Header
