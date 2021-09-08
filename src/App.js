import React, { useState } from "react";
// Icons
import { MdSettings,MdNotifications } from 'react-icons/md'
import { FaFacebookMessenger,FaPlus } from 'react-icons/fa'
import { BiChevronRight } from 'react-icons/bi'
import { FiChevronLeft } from 'react-icons/fi'
import { AiFillCaretDown,AiFillCaretLeft } from 'react-icons/ai'
import { CgProfile,CgMenuGridO } from 'react-icons/cg'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { GoSignOut } from 'react-icons/go'
import { IoMdHelpCircle } from 'react-icons/io'
// import
import { CSSTransition } from 'react-transition-group'

function App() {

  return (
    <>
      <Navbar>
        <NavItem icon={<CgMenuGridO />} />
        <NavItem icon={<FaFacebookMessenger />} />
        <NavItem icon={<MdNotifications />} />

        <NavItem icon={<AiFillCaretDown />}>
          {/* Dropdown here */}
          <DropdownMenu />
        </NavItem>

      </Navbar>
    </>
  );
}

function Navbar({ children }) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {children}
      </ul>
    </nav>
  )
}

function NavItem({ icon, children }) {
  const [open, setOpen] = useState(false)

  return (
    <li className='nav-item'>
      <a href='#' className='icon-button'
        onClick={() => setOpen(!open)}>
        {icon}
      </a>

      {open && children}
    </li>
  )
}

function DropdownMenu() {
  const [activeMenu, setActiveMenu] = useState('main')
  const [menuHeight, setMenuHeight] = useState(null)

  function calcHeight(el){
    const height = el.offsetHeight;
    setMenuHeight(height)
  }

  function DropdownItem(
    { 
      children,
      leftIcon, 
      rightIcon, 
      goToMenu,
    }
  ) {
    return (
      <a 
        href='#' 
        className='menu-item' 
        onClick={
          ()=> goToMenu && setActiveMenu(goToMenu)
        }
      >
        <span className='icon-button'> {leftIcon} </span>
        {children}
        <span className='icon-right'> {rightIcon} </span>
      </a>
    )
  }

  return (
    <div className='dropdown' style={{height: menuHeight }}>
      <CSSTransition
        in={activeMenu === 'main'}
        unmountOnExit
        timeout={500}
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>

          <DropdownItem leftIcon={<CgProfile/>} >My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<MdSettings />}
            rightIcon={<BiChevronRight />}
            goToMenu='settings'
          >Settings</DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        unmountOnExit
        timeout={500}
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>

          <DropdownItem
            leftIcon={<AiFillCaretLeft />}
            goToMenu='main'
          > Back </DropdownItem>
          
          <DropdownItem leftIcon={<BsFillShieldLockFill />}>Password and Security</DropdownItem>
          <DropdownItem leftIcon={<IoMdHelpCircle />}>Help and Support</DropdownItem>
          <DropdownItem leftIcon={<GoSignOut />}>Log out</DropdownItem>
          
        </div>
      </CSSTransition>

    </div>
  )
}

export default App;
