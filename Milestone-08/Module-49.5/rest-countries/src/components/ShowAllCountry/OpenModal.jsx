import React from "react";

const OpenModal = (props) => {
  return (
    <>
      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-2xl">Nothing right now</h3>

          <div className="modal-action">
            <label htmlFor="my-modal-5" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default OpenModal;
