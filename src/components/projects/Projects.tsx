import { Box } from '@mui/system'
import { ProjectsStyled } from './styles'
import { CardList } from './cards/CardList'

export const Projects = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark' }} id="projects">
      <ProjectsStyled>
        <CardList />
      </ProjectsStyled>
    </Box>
  )
}
