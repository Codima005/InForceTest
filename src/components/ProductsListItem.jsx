

import React from 'react';
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
export const ProductsListItem = ({ product, onDelete }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);


  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleDelate = () => {
    onDelete(product.id);
    closeModal()
  };

  return (
    <div>
      <li className="product-list-item" >
        <a href={`/products/${product.id}`}> {product.name} </a>
        <a>{product.count}</a>
        &nbsp;
        <a href="#" onClick={openModal}>
          Delete
        </a>
      </li>


      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >

        <div>are you sure?</div>
        <button onClick={handleDelate}>Delete</button>
        <button onClick={closeModal}>Cancel</button>

      </Modal>
    </div >
  );
}

