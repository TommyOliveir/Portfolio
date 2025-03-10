import { styled } from '@mui/system';

export const SkillsStyled = styled('div')({
  background: '#f5e9ff',
  padding: '8em',
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
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '2em 4em',
  maxWidth: '400px',
});

export const IconStyled = styled('img')({
  width: '30px',
});
