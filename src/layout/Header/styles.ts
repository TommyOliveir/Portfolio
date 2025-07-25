import { styled } from '@mui/system'

type HeaderStyledProps = {
  bgColor?: string
}

export const HeaderStyled = styled('header')<HeaderStyledProps>((props) => ({
  color: props.theme.palette.primary.main,
  backgroundColor: props.bgColor || props.theme.palette.background.default,
  alignItems: 'center',
  position: 'sticky',
  display: 'flex',
  top: 0,
  padding: '1em',
  zIndex: 999,
  [props.theme.breakpoints.up('lg')]: {
    padding: '1em 20em',
    justifyContent: 'space-between',
  },
}))
