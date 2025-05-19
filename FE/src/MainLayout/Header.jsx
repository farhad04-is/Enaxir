import React, { useContext } from 'react'
import { localStorgeBasket } from '../Context/BasketLocalstorge'
import { Whislitscontext } from '../Context/WhislistProvider'

function Header() {
const{basket}=useContext(localStorgeBasket)
const {Whislist}=useContext(Whislitscontext)

  return (
 <>
    <div>Basket  {basket.length}  </div>
    <div> Favorite {Whislist.length}</div>
 </>
  )
}

export default Header