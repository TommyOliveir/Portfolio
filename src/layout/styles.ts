import { styled } from '@mui/system';

export const HeaderStyled = styled('div')({
  color: 'purple',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 20%',
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
});

export const HeroImageStyled = styled('img')({
  width: '500px',
});

export const HeroWrapperStyled = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 20%',
});

export const FooterStyled = styled('div')({
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  height: "10em",
  padding: '0 20%',
  background: 'purple',
  gap: '1em',
  ul: {
    display: 'flex',
    gap: '1em',
    listStyle: 'none',
  },
  a: {
    color: '#ffffff',
  },
});
