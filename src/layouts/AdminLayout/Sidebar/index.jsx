import { useLocation } from 'react-router-dom'

import { SIDEBAR_ITEMS } from './constants'

import * as S from './styles'

function Sidebar({ isShowLeftSidebar }) {
  const { pathname } = useLocation()

  const renderSidebarItems = SIDEBAR_ITEMS.map((item, index) => {
    return (
      <S.SidebarItem key={index} to={item.path} active={pathname === item.path}>
        {item.name}
      </S.SidebarItem>
    )
  })

  return (
    <S.SidebarWrapper isShowLeftSidebar={isShowLeftSidebar}>{renderSidebarItems}</S.SidebarWrapper>
  )
}

export default Sidebar
