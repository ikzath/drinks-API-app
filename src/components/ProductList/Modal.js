import React, { Fragment} from "react";
import {
  ModalBlock,
  ModalBody,
  ModalClose,
  ModalContainer,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from "./ModalStyles";

const Modal = ({ children, title, active, hideModal, ing1, ing2, ing3, ing4, ing5 }) => {

  
 return (
    <Fragment>
      {active && (
      <ModalBlock >
        <ModalOverlay onClick={() => hideModal()}></ModalOverlay>
          <ModalContainer>
            <ModalHeader>
              <ModalTitle>Ingredients:&nbsp;{ing1},&nbsp;{ing2},&nbsp;{ing3},&nbsp;{ing4},&nbsp;{ing5}. </ModalTitle>
                <ModalClose onClick={() => hideModal()}>X</ModalClose>
                </ModalHeader>
                <ModalBody>{children.strInstructions}</ModalBody>
        </ModalContainer>
      </ModalBlock>
 )}
 </Fragment>
 );
};
export default Modal;