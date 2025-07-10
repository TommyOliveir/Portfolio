import { styled } from '@mui/system'

export const LayoutWrapperStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
})

export const MainStyled = styled('main')({
  flexGrow: 1,
})

export const NavStyled = styled('ul')(({ theme }) => ({
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'row',
  gap: '1em',
  fontSize: '1em',
  textDecoration: 'none',
  a: {
    textDecoration: 'none',
    color: theme.palette.primary.main,
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

export const HeroDescriptionStyled = styled('div')({
  width: '500px',
  lineHeight: 1.5,
})

export const HeroImageStyled = styled('img')({
  width: '350px',
})

export const HeroWrapperStyled = styled('div')(({ theme }) => ({
  padding: '1em',
  display: 'flex',
  flexWrap: 'wrap',
  [theme.breakpoints.up('sm')]: {
    justifyContent: 'space-evenly',
  },
  [theme.breakpoints.up('lg')]: {
    padding: '0 20em',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
}))

export const FooterStyled = styled('footer')(({ theme }) => ({
  color: '#ffffff',
  display: 'flex',
  justifyContent: 'center',
  background: theme.palette.primary.dark,
  padding: '1em',
  ul: {
    display: 'flex',
    gap: '2em',
    listStyle: 'none',
  },
  a: {
    color: '#ffffff',
  },

  [theme.breakpoints.up('md')]: {
    display: 'flex',
    padding: '1em 20em',
  },
}))
