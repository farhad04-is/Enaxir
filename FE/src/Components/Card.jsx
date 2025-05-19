import React from 'react'
import { useContext } from 'react'
import { AllDatacontextt } from '../Context/AllDatacontext'
import { localStorgeBasket } from '../Context/BasketLocalstorge'

function Card() {
    const { basket, setbasket } = useContext(localStorgeBasket)
    const { data } = useContext(AllDatacontextt)

    function Addbasket(x) {
       let varsa=basket.find((item)=>item._id===x._id)
      if(varsa){
       setbasket(
        basket.map((item)=>item._id===x._id ? {...item,count:item.count + 1}:item )
       )
      }
      else{
        setbasket([...basket,{...x,count:1}])
        console.log(basket);
      }
    }

    return (
        <>
            {
                data.map((x) => (
                    <ul>
                        <li><img src={x.image} alt="" /></li>
                        <li>{x.productName}</li>
                        <li>{x.price}</li>
                        <button onClick={() => Addbasket(x)}>basket</button>
                    </ul>
                ))
            }
        </>
    )
}

export default Card