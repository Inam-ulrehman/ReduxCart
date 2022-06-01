import React from 'react'
import { useSelector } from 'react-redux'

import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBar = () => {
  const { cartAmount } = useSelector((state) => state.cart)
  return (
    <Wrapper>
      <div className='link'>
        <NavLink to='/'>Home</NavLink>
      </div>
      <div className='link'>
        <NavLink to='/products'>Products</NavLink>
        <NavLink to='/products/cart'>
          / Cart <span className='amount'>{cartAmount}</span>
        </NavLink>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;

  background: var(--white);

  a {
    color: var(--grey-5);
    transition: var(--transition);
  }
  .active {
    color: var(--primary-5);
    background-color: var(--primary-1);

    border-radius: var(--radius);
  }
  .link {
    padding: 1rem 0px;
    a {
      padding: 18px;
    }
  }
  .amount {
    color: var(--grey-5);
  }
`
export default NavBar
