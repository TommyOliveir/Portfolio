import { Outlet } from 'react-router-dom'
import { LayoutWrapperStyled, MainStyled } from './styles'
import { Header } from './Header/Header'
import { Footer } from './Footer'

export const Layout = () => {
  return (
    <LayoutWrapperStyled>
      <Header />
      <MainStyled>
        <Outlet />
      </MainStyled>
      <Footer />
    </LayoutWrapperStyled>
  )
}
