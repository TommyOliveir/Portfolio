import { styled } from '@mui/system'

export const AboutDescriptionStyled = styled('div')({
  padding: '4em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10em',
  flexWrap: 'wrap',

  iframe: {
    width: '100%',
    height: '180px',
    border: '2px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
})

export const AboutDescriptionTextStyled = styled('div')(({ theme }) => ({
  maxWidth: '30%',
  color: theme.palette.primary.light,
  [theme.breakpoints.down('md')]: {
    maxWidth: '100%',
  },
}))
