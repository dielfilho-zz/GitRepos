import styled from 'styled-components';

export const Modal = styled('div')`
  display:flex;
  align-items:center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0,0,0,0.5);
  color: black;
  border-radius: 10px;
  overflow: hidden;
`;

export const ModalContent = styled('div')`
  width: 800px;
  background-color: #fff;
  overflow: hidden;
  max-height: 70%
`;

export const ModalHeader = styled('div')`
  padding: 10px;
`;

export const ModalTitle = styled('div')`
  padding: 10px;
  font-size: 40px;
  text-align : center;
`;

export const ModalBody = styled('div')`
  padding: 10px;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  font-size: 20px;
  height: 470px;
  text-align : center;
  overflow: scroll;
  overflow-x: hidden;
`;

export const ModalFooter = styled('div')`
  display:flex;
  margin: 10px 15px 10px 10px;
  justify-content: flex-end;
`;