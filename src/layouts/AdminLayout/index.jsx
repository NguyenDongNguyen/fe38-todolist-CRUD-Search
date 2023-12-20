import { useState } from 'react'
import { Outlet, Navigate, useNavigate } from 'react-router-dom'

import Header from './Header'
import Sidebar from './Sidebar'

import * as S from './styles'

function AdminLayout() {
  const [isShowLeftSidebar, setIsShowLeftSidebar] = useState(false)
  const [isShowRightSidebar, setIsShowRightSidebar] = useState(false)

  // const role = 'user'

  // if (role !== 'amdin') {
  //   return <Navigate to="/asdiashfihaishfoia" />
  // }
  return (
    <S.AppWrapper>
      <Header
        isShowLeftSidebar={isShowLeftSidebar}
        isShowRightSidebar={isShowRightSidebar}
        setIsShowLeftSidebar={setIsShowLeftSidebar}
        setIsShowRightSidebar={setIsShowRightSidebar}
      />
      <S.AppContainer>
        <Sidebar isShowLeftSidebar={isShowLeftSidebar} />
        <S.AppContent isShowLeftSidebar={isShowLeftSidebar}>
          <Outlet />
        </S.AppContent>
      </S.AppContainer>
      <S.RightSidebarWrapper isShowRightSidebar={isShowRightSidebar}>
        <S.RightSidebarOverlay onClick={() => setIsShowRightSidebar(false)} />
        <S.RightSidebarContainer>Right sidebar</S.RightSidebarContainer>
      </S.RightSidebarWrapper>
    </S.AppWrapper>
  )
}

export default AdminLayout
