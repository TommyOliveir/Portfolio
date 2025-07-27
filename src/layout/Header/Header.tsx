import { Nav } from '../Nav'
import MenuIcon from '@mui/icons-material/Menu'
import { useEffect, useState } from 'react'
import { IconButton, Drawer, List, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { HeaderStyled } from './styles'

export const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      setScrolled(offset > 50)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])

  return (
    <HeaderStyled bgColor={scrolled ? '#2e2b32' : ''}>
      {isMobile && (
        <>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <List>
              {/* <ListItem button onClick={() => setOpen(false)}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemText primary="Contact" />
              </ListItem>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemText primary="Contact" />
              </ListItem> */}
            </List>
          </Drawer>
        </>
      )}

      {!isMobile && (
        <>
          <h1>RANGERDEV</h1>
          <Nav />
        </>
      )}
    </HeaderStyled>
  )
}
