import { Link } from 'react-router-dom'
import { FooterStyled } from './styles'
import { Button } from '@mui/material'

export const Footer = () => {
  const handleUpClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
        <li>
          <p>@rangerdev 2025</p>
        </li>
      </ul>

      <Button
        onClick={handleUpClick}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
        }}
        variant="contained"
        color="primary"
      >
        up
      </Button>
    </FooterStyled>
  )
}
