import { Link } from 'react-router-dom';
import { FooterStyled } from './styles';

function Footer() {
  return (
    <FooterStyled>
      <ul>
        <li>
          <Link to="">Footer</Link>
        </li>
        <li>
          <Link to="">Footer</Link>
        </li>
        <li>
          <Link to="">Footer</Link>
        </li>
      </ul>
      <p>@rangerdev 2025</p>
    </FooterStyled>
  );
}

export default Footer;
