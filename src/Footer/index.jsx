import { useState } from 'react'
import * as S from './styles'

import Header from '../Header'

function Footer() {
  const [active, setActive] = useState(false)
  const [bgColor, setBgColor] = useState('gray')

  return (
    <>
      <Header />
      <S.FooterContainer bgColor={bgColor} active={active}>
        <h2>Ahihi</h2>
        <S.FooterContent>
          Footer
          <button onClick={() => setBgColor('yellow')}>Yellow</button>
          <button onClick={() => setBgColor('red')}>Red</button>
          <button onClick={() => setBgColor('green')}>Green</button>
          <button onClick={() => setBgColor('blue')}>Blue</button>
          <button onClick={() => setBgColor('gray')}>Default</button>
          <button onClick={() => setActive(!active)}>Toggle active</button>
        </S.FooterContent>
      </S.FooterContainer>
    </>
  )
}

export default Footer
