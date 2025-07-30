import { styled } from '@mui/system'

export const ContactItemsStyled = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '40px',
  padding: '4em',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
}))

export const ContactTextStyled = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '30%',
  },
}))

export const FormStyled = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  marginTop: '2rem',
  input: {
    padding: '1em',
  },
  [theme.breakpoints.up('sm')]: {
    width: '30%',
  },
}))
