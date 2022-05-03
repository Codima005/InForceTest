import React, { useState } from "react";
import { ProductsListItem } from "./ProductsListItem";
import Modal from 'react-modal';



const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

const DEFAULT_PRODUCT = {
    name: "",
    count: "",
    width: "",
    height: "",
    weight: "",
}
export const ProductsList = ({ data, onDelete, onSubmit }) => {

    const [modalIsOpen, setIsOpen] = useState(false);
    const [newProduct, setNewProduct] = useState(DEFAULT_PRODUCT)

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }

    function onFieldChange(e) {
        const { name, value } = e.currentTarget;
        setNewProduct(state => ({ ...state, [name]: value }))
    }

    function onNewSubmit() {
        onSubmit(newProduct)
        closeModal()
        setNewProduct(DEFAULT_PRODUCT)  
    }



    return (
        <div>
            <ul className="product-list">
                {data.map((product) => (
                    <ProductsListItem
                        key={product.id}
                        product={product}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            <button name="newProduct" onClick={openModal}>Add new product</button>


            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Modal"
            >
                <div className="container">
                    <h2>Plese set product details</h2>

                    <div className="setForm">



                        <label >
                            Name:
                            <input type="text" name="name" onChange={onFieldChange} />
                        </label>
                        <label >
                            Count:
                            <input type="text" name="count" onChange={onFieldChange} />
                        </label>
                        <label >
                            Width:
                            <input type="text" name="width" onChange={onFieldChange} />
                        </label>
                        <label >
                            Height:
                            <input type="text" name="height" onChange={onFieldChange} />
                        </label>
                        <label >
                            Weight:
                            <input type="text" name="weight" onChange={onFieldChange} />
                        </label>

                        <div className="buttonWrapper">
                            <button onClick={onNewSubmit}>Confirm</button>
                            <button onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div >
    );
}

