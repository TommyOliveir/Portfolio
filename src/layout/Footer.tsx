import { Link } from 'react-router-dom';
import { Footertyled } from './styles';

function Footer() {
  return (
    <Footertyled>
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
    </Footertyled>
  );
}

export default Footer;
