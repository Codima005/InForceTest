import { useState, useEffect } from "react"
import { getProduct } from "../services/productsServices"
import { useParams } from "react-router-dom";


export const Product = () => {
    const [data, setData] = useState(null)
    const { id } = useParams()
    console.log(id)
    useEffect(() => {
        const getData = async () => {
            const res = await getProduct(id)
            setData(res)
        }
        getData()
    }, [id]);

    if (!data) {
        return null
    }

    return (
        <div>
            <img src={data.imageUrl}/> 
            <div>{data.name}</div>
            <div>{data.count}</div>
            <div>{data.size.width}</div>
            <div>{data.size.height}</div>
            <div>{data.weight}</div>
            <div>{data.comments.map((com) => {
                return <p>{com}</p>
            })}</div>
        </div>
    )
} 