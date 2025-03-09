import { Link } from 'react-router-dom';
import { NavStyled } from './styles';

export const Nav = () => {
  return (
    <nav>
      <NavStyled>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </NavStyled>
    </nav>
  );
};
