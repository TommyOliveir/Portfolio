import { Nav } from './Nav'
import { HeaderStyled } from './styles'
import MenuIcon from '@mui/icons-material/Menu'

import { useState } from 'react'
import { IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export const Header = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = useState(false)

  return (
    <HeaderStyled>
      {isMobile && (
        <>
          <IconButton edge="start" color="inherit" onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
            <List>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemText primary="Home" />
              </ListItem>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemText primary="About" />
              </ListItem>
              <ListItem button onClick={() => setOpen(false)}>
                <ListItemText primary="Contact" />
              </ListItem>
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
