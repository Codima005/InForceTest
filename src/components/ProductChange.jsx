import React, { useState } from "react";


function ProductChange(props) {
  const [product, setProduct] = useState({ ...props.product });

  const onProductsFormSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...product
    };
    props.onSave(newProduct);
  };

  const onChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form action="" className="product-form" onSubmit={onProductsFormSubmit}>
      <label htmlFor="nameInput">Name</label>
      <input
        type="text"
        name="name"
        id="nameInput"
        value={product.name}
        onChange={onChange}
      />
    
      <div className="buttons">
        <button type="submit" className="pull-right">
          Save
        </button>
        <button type="button" className="pull-left" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default ContactForm;