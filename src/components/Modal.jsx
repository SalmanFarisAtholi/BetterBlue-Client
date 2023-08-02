import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-40"></div>
      <div className="bg-white w-96 p-4 rounded-lg shadow-xl z-50">
        <button
          className="absolute top-2 right-2 text-gray-200 hover:text-gray-300"
          onClick={onClose}
        >
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;

{/* <div className="container mx-auto p-4">
             
<button
  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  onClick={openModal}
>
  Open Modal
</button>
<Modal isOpen={modalOpen} onClose={closeModal}>
  <h2 className="text-xl font-bold mb-2">Modal Content</h2>
  <p>This is the content of the modal.</p>
</Modal>
</div> */}