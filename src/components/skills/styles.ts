import { styled } from '@mui/system';

export const SkillsSectionStyled = styled('div')({
  padding: '4em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '2em',
});

export const SkillWrapperStyled = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '.5em',
});

export const SkillsListStyled = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2em 8em',
});

export const IconStyled = styled('img')({
  width: '100px',
});
