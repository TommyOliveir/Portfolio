import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { LayoutWrapperStyled, MainStyled } from './styles';

const Layout = () => {
  return (
    <LayoutWrapperStyled>
      <Header />
      <MainStyled>
        <Outlet />
      </MainStyled>
      <Footer />
    </LayoutWrapperStyled>
  );
};

export default Layout;
