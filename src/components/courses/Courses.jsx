import "./courses.scss";
import image from "../../assets/img/lab-flask.svg";
import CustomModal from "../modal/Modal";
import { useState, useEffect } from "react";

const Courses = () => {
  

  const [selectedBlock, setSelectedBlock] = useState(null)

  const handleOpenModal = (modalId) => {
    setSelectedBlock(modalId);
  };

  const handleCloseModal = () => {
    setSelectedBlock(null);
  };

  const blocks = [
    { id: 1, img:"/src/assets/img/lab-flask.svg", name: 'Block 1' },
    { id: 2, img:"/src/assets/img/lab-flask.svg", name: 'Block 2' },
    { id: 3, img:"/src/assets/img/lab-flask.svg", name: 'Block 1' },
    { id: 4, img:"/src/assets/img/lab-flask.svg", name: 'Block 2' },
    { id: 5, img:"/src/assets/img/lab-flask.svg", name: 'Block 1' },
    { id: 6, img:"/src/assets/img/lab-flask.svg", name: 'Block 2' },
    { id: 7, img:"/src/assets/img/lab-flask.svg", name: 'Block 1' },
    { id: 8, img:"/src/assets/img/lab-flask.svg", name: 'Block 2' },
    // Add more blocks as needed
  ];

  const modals = [
    { id: 1, content: 'Content for Modal 1' },
    { id: 2, content: 'Content for Modal 2' },
    { id: 3, content: 'Content for Modal 1' },
    { id: 4, content: 'Content for Modal 2' },
    { id: 5, content: 'Content for Modal 1' },
    { id: 6, content: 'Content for Modal 2' },
    { id: 7, content: 'Content for Modal 1' },
    { id: 8, content: 'Content for Modal 2' },
    // Match modal IDs with block IDs or customize as needed
  ];




  const renderModals = () => {
    return modals.map((modal, index) => (
      <CustomModal
        key={modal.id}
        isOpen={selectedBlock === modal.id}
        onClose={handleCloseModal}
      >
        <h2>Modal {modal.id}</h2>
        <p>{modal.content}</p>
      </CustomModal>
    ));
  };

  return (
    <div className=" courses main-wrapper" id="courses">
      <div className="main-component">
        <h2>Explore Courses With Precision</h2>
        <div className="courses__list">
          {blocks.map((block) => (
            <div
              className="courses__list-single"
              key={block.id}
              onClick={() => handleOpenModal(block.id)}
            >
              <img src={block.img} alt="" />
              <p>{block.name}</p>
            </div>
          ))}
          {renderModals()}
        </div>
      </div>
    </div>
  );
};

export default Courses;
