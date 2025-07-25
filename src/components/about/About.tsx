import { Typography } from '@mui/material'
import { AboutDescriptionTextStyled, AboutDescriptionStyled } from './styles'
import { TypeAnimation } from 'react-type-animation'
import { Box } from '@mui/system'

export const About = () => {
  return (
    <Box sx={{ bgcolor: 'primary.dark' }} id="about">
      <AboutDescriptionStyled>
        <div>
          {/* <img src="https://belaltheme.com/tm/Masud/Masud/images/about.jpg" alt="" /> */}
          <iframe
            width="435"
            height="226"
            src="https://www.youtube.com/embed/1w7OgIMMRc4"
            title="Guns N&#39; Roses - Sweet Child O&#39; Mine (Official Music Video)"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <AboutDescriptionTextStyled>
          <Typography variant="h4" component="h1" marginTop={4}>
            <TypeAnimation sequence={['About me']} wrapper="span" speed={50} />
          </Typography>
          <Typography marginTop={2} sx={{ fontWeight: 'light' }}>
            I am a graduate of a Bachelor of Science in Information Technology and originally from the Philippines.
            Early in my career, I worked in various IT-related roles, such as IT Support and Business Analyst. However,
            I later shifted my focus to frontend development, continuously updating my knowledge with the latest
            <Typography component="span" ml={1} sx={{ color: 'primary.main', fontWeight: 'bold' }}>
              frameworks, including React
            </Typography>
            .
          </Typography>
          <Typography marginTop={2} sx={{ fontWeight: 'light' }}>
            Beyond IT, I have a deep love for nature and travel. I previously lived in Italy, where I studied social
            sciences and explored different cultures. This experience has given me an advantage in understanding and
            adapting to cultural differences. I have also developed strong leadership skills and the ability to adjust
            to diverse environments. I am eager to contribute my leadership skills whenever needed.
          </Typography>
        </AboutDescriptionTextStyled>
      </AboutDescriptionStyled>
    </Box>
  )
}
