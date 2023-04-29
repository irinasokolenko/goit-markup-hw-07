export const modalRefs = {
    openModalBtn: document.querySelector(".hero-btn"),
    closeModalBtn: document.querySelector(".modal-close-btn"),
    backdrop: document.querySelector(".modal-backdrop"),
    modal: document.querySelector(".order-modal"),
    body: document.querySelector("body"),
  };
  
  function toggleModal() {
    modalRefs.backdrop?.classList.toggle("is-hidden");
    modalRefs.modal?.classList.toggle("modal-animation");
    modalRefs.backdrop?.classList.toggle("backdrop-animation");
  }
  
  modalRefs.openModalBtn?.addEventListener("click", toggleModal);
  modalRefs.closeModalBtn?.addEventListener("click", toggleModal);