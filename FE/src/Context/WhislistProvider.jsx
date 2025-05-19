import React, { createContext, useEffect, useState } from 'react'


export const Whislitscontext=createContext()
function WhislistProvider({children}) {

  let localstor=localStorage.getItem('whislist')
const [Whislist,setWhislit]=useState(localstor ? JSON.parse(localstor) :[])

useEffect(()=>{
localStorage.setItem('whislist',JSON.stringify(Whislist))
},[])
let value={
  Whislist,setWhislit
}

  return (
<Whislitscontext.Provider value={value}>{children}</Whislitscontext.Provider>
  )
}

export default WhislistProvider