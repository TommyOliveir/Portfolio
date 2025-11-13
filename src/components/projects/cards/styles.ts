import { styled } from '@mui/system'

export const CardListStyled = styled('div')(({ theme }) => ({
  display: 'grid',
  marginTop: '4em',
  gap: '40px',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}))
