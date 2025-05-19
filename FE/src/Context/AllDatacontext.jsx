import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const AllDatacontextt = createContext()

function AllDatacontext({ children }) {
    const [data, setdata] = useState([])
    async function AllData() {
        let data = await axios.get("http://localhost:3000/")

        setdata(data.data)
    }
    async function deletedata(params) {
        axios.delete("http://localhost:3000/" + params)
    }
    useEffect(() => {
        AllData()
    }, [])

    return (
        <AllDatacontextt.Provider value={{ data, setdata, deletedata }}>{children}</AllDatacontextt.Provider>
    )
}

export default AllDatacontext