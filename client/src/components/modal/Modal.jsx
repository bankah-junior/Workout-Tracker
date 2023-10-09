import React from 'react'

const Modal = ({btnTitle, mainTitle, text}) => {
  return (
    <div>
        <label htmlFor="my_modal_6" className="cursor-pointer hover:underline">{btnTitle}</label>
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{mainTitle}</h3>
                <p className="py-4">{text}</p>
                <div className="modal-action">
                    <label htmlFor="my_modal_6" className="btn">Close!</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Modal