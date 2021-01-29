import React from 'react'
import './Header.scss'
import logo from '../../assets/logo.svg'
import BurguerButton from '../Buguer-button/Burguer-button'

const Header = () => {
  return (
    <header className='header'>
      <a href='/'>
        <img src={logo} alt='Logo'/>
      </a>
      <nav>
        <BurguerButton />
      </nav>
    </header>
  )
}
 
export default Header