import { HeroDescriptionStyled, HeroImageStyled, HeroWrapperStyled } from './styles';
import man from '../assets/tommy.png';

function Hero() {
  return (
    <HeroWrapperStyled>
      <HeroDescriptionStyled>
        <h1>TOMMY OLIVEIR</h1>
        <h2>I am a Frontend Developer</h2>
        <p>
          Passionate frontend developer with a keen eye for design and a love for crafting seamless user experiences.
          Skilled in HTML, CSS, JavaScript, and modern frameworks like React.
        </p>
      </HeroDescriptionStyled>
      <HeroImageStyled src={man} alt="smiling man" />
    </HeroWrapperStyled>
  );
}

export default Hero;
