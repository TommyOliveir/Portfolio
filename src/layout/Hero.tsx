import { HeroDescriptionStyled, HeroImageStyled, HeroWrapperStyled } from "./styles";
import man  from "../assets/artist-white.jpg"

function Hero() {
  return (
    <HeroWrapperStyled>
      <HeroDescriptionStyled>
      <h1>Hello My Name is Tommy</h1>
      <h2>Frontend React Developer</h2>
      <p>
        Passionate frontend developer with a keen eye for design and a love for
        crafting seamless user experiences. Skilled in HTML, CSS, JavaScript,
        and modern frameworks like React, I build responsive, interactive, and
        high-performance web applications. Dedicated to creating clean,
        efficient code and bringing ideas to life with elegant UI/UX solutions.
      </p>
     </HeroDescriptionStyled>
     <HeroImageStyled src={man} alt="smiling man" />
    </HeroWrapperStyled>
  );
}

export default Hero;
