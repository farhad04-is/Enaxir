import React, { useContext } from 'react'
import { localStorgeBasket } from '../Context/BasketLocalstorge'

function Header() {
const{basket}=useContext(localStorgeBasket)

  return (
    <div>Basket  {basket.length}   Favorite 0</div>
  )
}

export default Header