import { styled } from '@mui/system';

export const LayoutWrapperStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

export const MainStyled = styled('main')({
  flexGrow: 1,
});

export const HeaderStyled = styled('div')({
  color: 'purple',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '1em 20em',
  position: 'sticky',
  top: 0,
});

export const NavStyled = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: '2em',
  textDecoration: 'none',
  a: {
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
});

export const HeroDescriptionStyled = styled('div')({
  width: '500px',
  lineHeight: 1.5,
});

export const HeroImageStyled = styled('img')({
  width: '500px',
});

export const HeroWrapperStyled = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20em',
});

export const FooterStyled = styled('div')({
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  padding: '1em 20em',
  background: 'purple',
  ul: {
    display: 'flex',
    gap: '2em',
    listStyle: 'none',
  },
  a: {
    color: '#ffffff',
  },
});
