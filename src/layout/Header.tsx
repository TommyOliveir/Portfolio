import { Nav } from './Nav';
import { HeaderStyled } from './styles';

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>RANGERDEV</h1>
      <Nav />
    </HeaderStyled>
  );
};
