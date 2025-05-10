import { styled } from '@mui/system'

export const AboutDescriptionStyled = styled('div')({
  padding: '4em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '5em',
  flexWrap: 'wrap',
})

export const AboutDescriptionTextStyled = styled('div')(({ theme }) => ({
  maxWidth: '30%',
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}))
