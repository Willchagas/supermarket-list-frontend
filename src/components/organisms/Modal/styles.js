import styled from 'styled-components'

export const ModalBackgroundContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.darkTransparent};
`
export const ModalContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 16px;
  padding-left: 24px;
  padding-right: 24px;
  align-items: center;

  @media (max-width: 830px) {
    width: 60vw;
  }

  @media (max-width: 420px) {
    width: 100vw;
  }
`
export const ModalHeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 24px;
`
export const ModalCloseButton = styled.div`
  height: 24px;
  width: 24px;
  background-color: transparent;
  border: 0;
  background-image: url('/images/close.svg');
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  cursor: pointer;
`
