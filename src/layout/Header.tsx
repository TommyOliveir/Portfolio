import Nav from './Nav';
import { HeaderStyled } from './styles';

function Header() {
  return (
    <HeaderStyled>
      <h1>RANGERDEV</h1>
      <Nav />
    </HeaderStyled>
  );
}

export default Header;
