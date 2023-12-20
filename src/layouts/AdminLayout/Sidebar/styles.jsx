import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

export const SidebarWrapper = styled.div`
  position: absolute;
  left: ${(props) => (props.isShowLeftSidebar ? '0px' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: #87e8de;
  transition: all 0.3s;
`

export const SidebarItem = styled(Link)`
  display: block;
  padding: 8px 12px;
  text-decoration: none;
  color: black;
  cursor: pointer;

  &:hover {
    background-color: #5cdbd3;
  }

  ${(props) =>
    props.active &&
    css`
      background-color: #13c2c2;
      color: white;
      border-right: 5px solid #006d75;

      &:hover {
        background-color: #13c2c2;
      }
    `}
`
