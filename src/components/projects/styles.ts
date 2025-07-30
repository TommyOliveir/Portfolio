import { styled } from '@mui/system'

export const ProjectsStyled = styled('header')((props) => ({
  color: props.theme.palette.primary.main,
  // border: 'red solid 6px',
  gap: '40px',
  padding: '2em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  //   zIndex: 999,
  //   [props.theme.breakpoints.up('lg')]: {
  //     padding: '1em 20em',
  //     justifyContent: 'space-between',
  //   },
}))
