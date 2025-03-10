import { HeroDescriptionStyled, HeroImageStyled, HeroWrapperStyled } from './styles';
import man from '../assets/tommy.png';
import { Button } from '@mui/material';

export const Hero = () => {
  return (
    <HeroWrapperStyled>
      <HeroDescriptionStyled>
        <h1>TOMMY OLIVEIR</h1>
        <h2>I am a Frontend Developer</h2>
        <p>
          Passionate frontend developer with a keen eye for design and a love for crafting seamless user experiences.
          Skilled in HTML, CSS, JavaScript, and modern frameworks like React.
        </p>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Projects
        </Button>
        <Button variant="outlined" color="primary" sx={{ ml: 2, mt: 2 }}>
          Download CV
        </Button>
      </HeroDescriptionStyled>
      <HeroImageStyled src={man} alt="smiling man" />
    </HeroWrapperStyled>
  );
};
