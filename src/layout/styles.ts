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
  border: '1px red solid',
  width: '500px',
});

export const HeroImageStyled = styled('img')({
  border: '1px red solid',
  width: '500px',
});

export const HeroWrappertyled = styled('div')({
  border: '1px green solid',
  display: 'flex',
});
