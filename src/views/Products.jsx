import { useState, useEffect } from "react"
import { ProductsList } from "../components/ProductsList"
import { getProducts, deleteProduct, createProduct } from "../services/productsServices"

function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {

        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}


export const Products = () => {
    const [sortType, setSortType] = useState("name")
    const [data, setData] = useState([])
    


    useEffect(() => {
        const getData = async () => {
            const res = await getProducts()
            setData(res)
        }
        getData()
    }, []);

    const onDeleteProduct = async (id) => {
        await deleteProduct(id);
        const res = await getProducts()
        setData(res)
    }

    const onSubmitProduct = async (newProduct) => {
        await createProduct(newProduct)
        const res = await getProducts()
        setData(res)  
    }

    const onSortTypeChange = (e) => {
        setSortType(e.target.value)
    }

    const sortedData = [...data].sort(dynamicSort(sortType === "name" ? "name" : "count"))

    return (
        <div>
            <select defaultValue={sortType} onChange={onSortTypeChange}>
                <option value="name">Name</option>
                <option value="count">Count</option>
            </select>
            <ProductsList data={sortedData} onDelete={onDeleteProduct} onSubmit={onSubmitProduct} />
        </div>
    )
} 