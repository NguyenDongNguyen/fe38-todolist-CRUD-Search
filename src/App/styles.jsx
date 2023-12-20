import styled, { css } from 'styled-components'

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const AppContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
`

export const AppContent = styled.div`
  margin-left: 0px;
  padding: 16px;
  width: 100%;
  transition: all 0.3s;

  ${(props) =>
    props.isShowLeftSidebar &&
    css`
      margin-left: 250px;
      width: calc(100% - 250px);
    `}
`

export const RightSidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: ${(props) => (props.isShowRightSidebar ? 'flex' : 'none')};
`

export const RightSidebarOverlay = styled.div`
  width: calc(100% - 250px);
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`

export const RightSidebarContainer = styled.div`
  width: 250px;
  height: 100%;
  background-color: white;
`
