import styled from 'styled-components'

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  font-size: 14px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  font-family: 'Avenir Next';
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  margin-top: 20px;
  background-color: ${({ theme, outline }) =>
    outline ? theme.colors.light : theme.colors.primary};
  color: ${({ theme, outline }) =>
    outline ? theme.colors.primary : theme.colors.light};

  @media (max-width: 420px) {
    max-width: 300px;
  }
`
export const ButtonIcon = styled.img``
