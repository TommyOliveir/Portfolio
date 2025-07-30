import { IconStyled, SkillsListStyled, SkillsSectionStyled, SkillWrapperStyled } from './styles'
import { skills } from '../../mock_data/skills_json.json'
import { Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'
import { useInView } from 'react-intersection-observer'

export const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })

  const skillSet = skills.map((skill) => {
    return (
      <SkillWrapperStyled key={skill.name}>
        <IconStyled src={skill.image} alt="" />
        <p>{skill.name}</p>
      </SkillWrapperStyled>
    )
  })

  return (
    <SkillsSectionStyled>
      <Typography variant="h4" component="h1" ref={ref} id="skills">
        {inView && <TypeAnimation sequence={['My Skills']} wrapper="span" speed={50} />}
      </Typography>
      <SkillsListStyled>{skillSet}</SkillsListStyled>
    </SkillsSectionStyled>
  )
}
