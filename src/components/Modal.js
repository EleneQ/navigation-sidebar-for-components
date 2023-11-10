import ReactDOM from "react-dom";
import { useEffect } from "react";

/* 
  the createPortal is for the purpose of taking the modal code and
  placing it in the element with the "modal-container" class. we're
  doing this because the modal uses position:fixed and inset-0 to
  stretch the full width of the page (the full width of the body element),
  so placing it in a seperate element ensures correct positioning by
  avoiding potential conflicts with parent elements' positioning.
*/
function Modal({ onClose, children, actionBar }) {
  /* 
    this is so that scrolling is disabled whenever the modal
    is open 
  */
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-60 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">{actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")
  );
}

export default Modal;
