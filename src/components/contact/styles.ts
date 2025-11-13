import { styled } from '@mui/system'

export const ContactItemsStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  textAlign: 'left',
  gap: '40px',
  marginTop: '4em',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
}))

export const ContactTextStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '2em',
  [theme.breakpoints.up('sm')]: {
    width: '30%',
  },
}))

export const FormStyled = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  '& input, & textarea': {
    padding: '1em',
  },
  '& textarea': {
    height: '100px',
  },
  [theme.breakpoints.up('sm')]: {
    width: '30%',
  },
}))
