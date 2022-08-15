import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
// import Image from 'next/image'
// import logo from '../public/logo.png'

import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <nav className='nav-container'>
    <div className="navbar-container">
     
        {/* <Link href="/">
          <Image 
            src={logo}
            alt="Custom Engravings"
            width={50}
            height={60}
            />
        </Link>  */}
        
      <p className="logo">
        <Link href="/">Z&N Creative</Link>
      </p>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
    </nav>
  )
}

export default Navbar