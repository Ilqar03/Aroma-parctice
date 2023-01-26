import React, { useEffect, useState } from 'react'
import axios from "axios";

function TrendingProductSection() {
    const [data, setData] = useState([]);
    const allData = () => {
        axios.get("http://localhost:3003/").then((res) => {
            setData(res.data)
        });
    }

    useEffect(() => {
        allData()
    }, []);

    const handledelete = (_id) => {
        axios.delete(`http://localhost:3003/${_id}`).then(() => {
            allData()
        })
    }
    return (
        <>
            {data.map((x) => (
                <div>
                    <img alt='foto' src={x.img}></img>
                    <p>{x.categories}</p>
                    <p>{x.name}</p>
                    <p>{x.price}$</p>
                    <button onClick={() => (handledelete(x._id))}>Delete</button>
                </div>
            ))}
        </>
    )
}

export default TrendingProductSection