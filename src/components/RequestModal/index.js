import React, { useContext } from "react";
import { Modal, ModalDialog, ModalContent, ModalBody, ModalBackdrop, CloseButton, ModalTitle } from "../Modal"
import { CloseIcon } from "../Icons"
import { Context } from "../context";
import RequestForm from "../RequestForm";

const RequestModal = ({ location, thanksURL }) => {
  const { popupContext, setPopupContext } = useContext(Context);
  return (
    <>
      <Modal className="modal" hidden={!popupContext.isVisible} >
        <ModalDialog className="modal-dialog modal-dialog-centered">
          <ModalContent className="modal-content">
            <ModalBody className="modal-body">
              <CloseButton className="close" onClick={() => setPopupContext({
                isVisible: false,
                thanksURL: "",
              })}><CloseIcon /></CloseButton>
              <ModalTitle className="h4">Get A Free Quote</ModalTitle>
              <RequestForm location={location} thanksURL={thanksURL} sourceURL={popupContext.sourceURL} productDetail={popupContext.productDetail} />
            </ModalBody>
          </ModalContent>
        </ModalDialog>
      </Modal>
      <ModalBackdrop hidden={!popupContext.isVisible} />
    </>
  )
}

export default RequestModal