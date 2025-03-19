import { Typography } from '@mui/material';
import { Skills } from '../skills/Skills';
import { AboutDescriptionTextStyled, AboutDescriptionStyled } from './styles';
import { TypeAnimation } from 'react-type-animation';

export const About = () => {
  return (
    <>
      <AboutDescriptionStyled>
        <div>
          <img src="https://belaltheme.com/tm/Masud/Masud/images/about.jpg" alt="" />
        </div>
        <AboutDescriptionTextStyled>
          <Typography variant="h4" component="h1">
            <TypeAnimation sequence={['  About me']} wrapper="span" speed={50} />
          </Typography>
          <Typography marginTop={2}>
            I am a graduate of a Bachelor of Science in Information Technology and originally from the Philippines.
            Early in my career, I worked in various IT-related roles, such as IT Support and Business Analyst. However,
            I later shifted my focus to frontend development, continuously updating my knowledge with the latest
            frameworks, including React. Beyond IT, I have a deep love for nature and travel. I previously lived in
            Italy, where I studied social sciences and explored different cultures. This experience has given me an
            advantage in understanding and adapting to cultural differences. I have also developed strong leadership
            skills and the ability to adjust to diverse environments. I am eager to contribute my leadership skills
            whenever needed.
          </Typography>
        </AboutDescriptionTextStyled>
      </AboutDescriptionStyled>
      <Skills />
    </>
  );
};
