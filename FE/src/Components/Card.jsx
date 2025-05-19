import React from "react";
import { useContext } from "react";
import { AllDatacontextt } from "../Context/AllDatacontext";
import { localStorgeBasket } from "../Context/BasketLocalstorge";
import { Whislitscontext } from "../Context/WhislistProvider";
import "../CSS/Card.css";
function Card() {
  const { basket, setbasket } = useContext(localStorgeBasket);
  const { data } = useContext(AllDatacontextt);
  const { Whislist, setWhislit } = useContext(Whislitscontext);

  function Addbasket(x) {
    let varsa = basket.find((item) => item._id === x._id);
    if (varsa) {
      setbasket(
        basket.map((item) =>
          item._id === x._id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      setbasket([...basket, { ...x, count: 1 }]);
      console.log(basket);
    }
  }

  function Whislisttt(x) {
    let obyekt = Whislist.find((obj) => obj._id === x._id);
    if (obyekt) {
      return;
    } else {
      setWhislit([...Whislist, x]);
    }
  }

  return (
    <div className="All_products">
      {data.map((x) => (
        <div className="Card" style={{backgroundImage:"ur"}}>

          <div className="Cardimage">
            <img src={x.image} alt="" />
          </div>

 
         <div className="PoductName"> {x.productName}</div>
          <div className="productprice"> {x.price}</div>
          <div>

            <button onClick={() => Addbasket(x)}>basket</button>
            <button onClick={() => Whislisttt(x)}>Whislist</button>
          </div>
       
        </div>
      ))}
    </div>
  );
}

export default Card;
