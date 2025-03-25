import { HeroDescriptionStyled, HeroImageStyled, HeroWrapperStyled } from './styles'
import man from '../assets/tommy.png'
import { Box, Button, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'

export const Hero = () => {
  return (
    <HeroWrapperStyled>
      <HeroDescriptionStyled>
        <Typography variant="h3" component="h1" color={'primary'} sx={{ fontWeight: 900 }}>
          TOMMY OLIVEIR
        </Typography>
        <Typography variant="h4" component="h1" sx={{ fontWeight: 500 }}>
          <TypeAnimation sequence={['I am a Frontend Developer']} wrapper="span" speed={50} />
        </Typography>

        <p>
          Passionate frontend developer with a keen eye for design and a love for crafting seamless user experiences.
          Skilled in HTML, CSS, JavaScript, and modern frameworks like React.
        </p>

        <Box sx={{ mt: 3 }}>
          <Button variant="contained" color="primary">
            Projects
          </Button>
          <Button variant="outlined" color="primary" sx={{ ml: 2 }}>
            Download CV
          </Button>
        </Box>
      </HeroDescriptionStyled>
      <HeroImageStyled src={man} alt="smiling man" />
    </HeroWrapperStyled>
  )
}
