
import React from 'react';
import { debounce } from './utilities/helpers';

export default function Navbar(props) {
  const [prevScroll, setPrevScroll] = React.useState(0) 
  const [visible, setVisible] = React.useState(true)

  const handleScroll = debounce(() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop > prevScroll) {
      setVisible(false)
    } else {
      setVisible(true)
    }
    setPrevScroll(scrollTop)
  }, 10)

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScroll, visible, handleScroll])


  return (
    <nav className={`main-nav ${prevScroll === 0 ? "no-background" : "nav-shadow"}`} style = {{top: visible ? '0px' : '-88px'}}>
      <a href="/#">
        <img className="nav-logo" src="imgs/logo.png" alt="illustrated logo of a tree held by a hand" />
      </a>

      <ul className="nav-links">
        <li className="nav-link"><a href="/#about">About Us</a></li>
        <li className="nav-link"><a href="/#programs">Programs</a></li>
        <li className="nav-link"><a href="/#news">News</a></li>
        <li className="nav-link"><a href="/#donate">Donate</a></li>
      </ul>  
    </nav>
      
  )
}