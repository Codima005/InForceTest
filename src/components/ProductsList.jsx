import React from "react";
import { ProductsListItem } from "./ProductsListItem";


export const ProductsList = ({ data, onDelete }) => {
    return (
        <ul className="product-list">
            {data.map((product) => (
                <ProductsListItem
                    key={product.id}
                    product={product}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}

