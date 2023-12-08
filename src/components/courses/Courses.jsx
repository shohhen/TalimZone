import "./courses.scss";
import image from "../../assets/img/lab-flask.svg";
import CustomModal from "../modal/Modal";
import { useState, useEffect } from "react";

const Courses = () => {
  const [modals, setModals] = useState([
    { isOpen: false, content: "Content for Modal 1" },
    { isOpen: false, content: "Content for Modal 2" },
    { isOpen: false, content: "Content for Modal 3" },
    { isOpen: false, content: "Content for Modal 4" },
    { isOpen: false, content: "Content for Modal 5" },
    { isOpen: false, content: "Content for Modal 6" },
    { isOpen: false, content: "Content for Modal 7" },
    { isOpen: false, content: "Content for Modal 8" },
  ]);

  useEffect(() => {
    // Logic for each modal content when opened
    const updatedModals = modals.map((modal, index) => {
      if (modal.isOpen) {
        return { ...modal, content: `Content for Modal ${index + 1}` };
      }
      return modal;
    });
    setModals(updatedModals);
  }, []);

  const handleOpenModal = (index) => {
    const updatedModals = [...modals];
    updatedModals[index].isOpen = true;
    setModals(updatedModals);
  };

  const handleCloseModal = (index) => {
    const updatedModals = [...modals];
    updatedModals[index].isOpen = false;
    setModals(updatedModals);
  };

  const renderModals = () => {
    return modals.map((modal, index) => (
      <CustomModal
        key={index}
        isOpen={modal.isOpen}
        onClose={() => handleCloseModal(index)}
      >
        <h2>Modal {index + 1}</h2>
        <p>{modal.content}</p>
      </CustomModal>
    ));
  };

  return (
    <div className=" courses main-wrapper" id="courses">
      <div className="main-component">
        <h2>Explore Topics With Precision</h2>
        <div className="courses__list">
          {modals.map((modal, index) => (
            <div
              className="courses__list-single"
              key={index}
              onClick={() => handleOpenModal(index)}
            >
              <img src={image} alt="" />
              <p>optimal nutrition</p>
            </div>
          ))}
          {renderModals()}
        </div>
      </div>
    </div>
  );
};

export default Courses;
