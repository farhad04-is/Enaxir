import React, { Children, createContext, useContext, useEffect, useState } from 'react'



export const localStorgeBasket = createContext()
function BasketLocalstorge({ children }) {

    const local = localStorage.getItem('basket')
    const [basket, setbasket] = useState(local ? JSON.parse(local) : [])

    useEffect(() => {
        localStorage.setItem('basket', JSON.stringify(basket))
    }, [basket])

    let value = {
        basket, setbasket
    }
    return (
        <localStorgeBasket.Provider value={value}>
            {children}
        </localStorgeBasket.Provider>
    )
}

export default BasketLocalstorge