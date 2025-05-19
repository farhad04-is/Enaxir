import React, { useContext, useEffect, useState } from 'react';
import { AllDatacontextt } from '../Context/AllDatacontext';
import './Admin.css';
import { Link } from 'react-router-dom';

function Admin() {
    const { data, deletedata } = useContext(AllDatacontextt);
    const [search, setSearch] = useState("");
    const [sortedData, setSortedData] = useState([]);

    useEffect(() => {
        setSortedData([...data]); 
    }, [data]);

    function handleSort(order) {
        const copy = [...sortedData]; 
        if (order === "AZ") {
            copy.sort((a, b) => a.productName.localeCompare(b.productName));
        } else {
            copy.sort((a, b) => b.productName.localeCompare(a.productName));
        }
        setSortedData(copy);
    }

    return (
        <>
            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => handleSort("AZ")}>A-Z</button>
            <button onClick={() => handleSort("ZA")}>Z-A</button>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedData
                            .filter(x =>
                                x.productName.toLowerCase().includes(search.toLowerCase())
                            )
                            .map((x) => (
                                <tr key={x._id}>
                                    <td>{x.image}</td>
                                    <td>{x.productName}</td>
                                    <td>{x.price}</td>
                                    <td>
                                        <button onClick={() => deletedata(x._id)}>delete</button>
                                    </td>
                                </tr>
                            ))
                    }
                </tbody>
            </table>
            <Link to='addadmin'>add</Link>
        </>
    );
}

export default Admin;
