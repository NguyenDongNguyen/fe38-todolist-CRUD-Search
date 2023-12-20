import { Button, Space } from 'antd'

import * as S from './styles'

function Header({
  isShowLeftSidebar,
  isShowRightSidebar,
  setIsShowLeftSidebar,
  setIsShowRightSidebar,
}) {
  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        <Space size={24}>
          <Button onClick={() => setIsShowLeftSidebar(!isShowLeftSidebar)}>Menu left</Button>
          <div>Logo</div>
        </Space>
        <Space size={24}>
          <div>Avatar</div>
          <Button onClick={() => setIsShowRightSidebar(!isShowRightSidebar)}>Menu right</Button>
        </Space>
      </S.HeaderContainer>
    </S.HeaderWrapper>
  )
}

export default Header
