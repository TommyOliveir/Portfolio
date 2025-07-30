import { Box } from '@mui/system'
import { ProjectsStyled } from './styles'
import { CardList } from './cards/CardList'
import { Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'

export const Projects = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark' }} id="projects">
      <ProjectsStyled>
        <Typography variant="h4" component="h1" marginTop={4}>
          <TypeAnimation sequence={['Projects']} wrapper="span" speed={50} />
        </Typography>
        <CardList />
      </ProjectsStyled>
    </Box>
  )
}
