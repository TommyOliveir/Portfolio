import { Box } from '@mui/system'
import { ProjectsStyled } from './styles'
import { CardList } from './cards/CardList'
import { Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import { Section } from '../common/section/Section'

export const Projects = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark' }} id="projects">
      <Section>
        <ProjectsStyled>
          <Typography variant="h4" component="h1">
            <TypeAnimation sequence={['Projects']} wrapper="span" speed={50} />
          </Typography>
          <CardList />
        </ProjectsStyled>
      </Section>
    </Box>
  )
}
