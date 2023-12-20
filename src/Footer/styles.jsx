import styled, { css } from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.bgColor};
  border: 2px solid green;

  ${(props) =>
    props.active &&
    css`
      border: 3px solid red;
      color: red;
      font-size: 24px;
    `};

  &:hover {
    background-color: purple;
  }

  & > h2 {
    color: #00fff7;
  }
`

export const FooterContent = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  padding: 8px 16px;
`
