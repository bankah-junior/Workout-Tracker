import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/wk-logo.jpg';
import { RiHome4Fill, RiMenuFill, RiCloseFill, RiGithubFill, RiLinkedinFill, RiInstagramFill, RiYoutubeFill } from 'react-icons/ri';
import { FaMale, FaFemale } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import './navbar.css';



const Navbar = () => {
  const [toggler, setToggler] = useState(false);
  
  const socialIcons = (
    <div className="flex items-center text-white sm:text-black">
      <Link to={'https://github.com/bankah-junior'} className='mr-6'><RiGithubFill size={25} /></Link>
      <Link to={'https://www.linkedin.com/in/anthony-bekoe-bankah-080448240'} className='mr-6'><RiLinkedinFill size={25} /></Link>
      <Link to={'https://instagram.com/iam.bankah?igshid=ZGUzMzM3NWJiOQ=='} className='mr-6'><RiInstagramFill size={25} /></Link>
      <Link to={'https://www.youtube.com/@welearn2?sub_confirmation=1'} className='mr-6'><RiYoutubeFill size={25} /></Link>
    </div>
  )
  
  const menu = (
    <ul className='flex flex-col sm:flex-row text-lg font-semibold text-white'>
      <Link to={'/'} className="mr-0 sm:mr-6 mb-6">
        <li className="px-8 py-2 flex sm:flex-col items-center"><RiHome4Fill className='mr-4 sm:mr-0 text-2xl sm:text-lg sm:hover:hidden' /> Home</li>
      </Link><hr className='mb-6 sm:mb-0' />
      <Link to={'/men'} className="mr-0 sm:mr-6 mb-6">
        <li className="px-8 py-2 flex sm:flex-col items-center"><FaMale className='mr-4 sm:mr-0 text-2xl sm:text-lg sm:hover:hidden' /> Men</li>
      </Link><hr className='mb-6 sm:mb-0' />
      <Link to={'/women'} className="mr-0 sm:mr-6 mb-6">
        <li className="px-8 py-2 flex sm:flex-col items-center"><FaFemale className='mr-4 sm:mr-0 text-2xl sm:text-lg sm:hover:hidden' /> Women</li>
      </Link><hr className='mb-6 sm:mb-0' />
      <Link to={'/profile'} className="mr-0 sm:mr-6 mb-6">
        <li className="px-8 py-2 flex sm:flex-col items-center"><CgProfile className='mr-4 sm:mr-0 text-2xl sm:text-lg sm:hover:hidden' /> Profile</li>
      </Link><hr className='mb-6 sm:mb-0' />
    </ul>
  )

  return (
    <div className='w-full h-24 flex flex-col text-black'>
      <div className="fixed w-full p-2 sm:px-20 shadow-2xl flex justify-between items-center z-[99] bg-white">
        
        {/* Logo */}
        <Link to={'/'}>
          <img src={logo} alt="" className='w-20 rounded-full' />
        </Link>
        {/* End of Logo */}

        {/* Menu icons */}
        {toggler
          ? <RiCloseFill size={25} className='rotate-in-center cursor-pointer mr-2' onClick={() => setToggler(false)} />
          : <RiMenuFill size={25} className='cursor-pointer slide-in-bck-center mr-2' onClick={() => setToggler(true)} />
        }
        {/* End of Menu icons */}

        {/* Social Icons For Big screens */}
        <div className="hidden sm:block">
          {socialIcons}
        </div>
        {/* End of Social Icons For Big screens */}

        {/* Menu */}
        {toggler && (
          <div className="navbar__menu h-screen sm:h-full w-full absolute top-24 left-0 flex flex-col sm:flex-row sm:justify-center py-12 sm:py-6 bg-[#141b1f] z-[99]">
            <div className="">
              {menu}
            </div>
            <div className="sm:hidden px-8 mt-12 text-lg">
              <h3 className='text-white mb-4 underline'>Follow Us :</h3>
              {socialIcons}
            </div>
          </div>
        )}
        {/* End of Menu */}
      </div>

    </div>
  )
}

export default Navbar