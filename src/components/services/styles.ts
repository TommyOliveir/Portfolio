import { styled } from '@mui/system'

export const SkillsSectionStyled = styled('div')({
  padding: '6em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '4em',
})

export const SkillWrapperStyled = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '.5em',
})

export const SkillsListStyled = styled('div')(({ theme }) => ({
  display: 'grid',
  gap: '2em 4em',
  gridTemplateColumns: 'repeat(2, 1fr)',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '2em 8em',
  },
}))

export const IconStyled = styled('img')({
  width: '60px',
})
