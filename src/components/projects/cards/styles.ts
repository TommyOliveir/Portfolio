import { styled } from '@mui/system'

export const CardListStyled = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: '40px',
  [theme.breakpoints.up('sm')]: {
    width: '50%',
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}))
