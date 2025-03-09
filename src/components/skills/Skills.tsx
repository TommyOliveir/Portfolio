import { IconStyled, SkillsListStyled, SkillsStyled, SkillWrapperStyled } from './styles';
import { skills } from '../../mock_data/skills_json.json';

export const Skills = () => {
  const skillSet = skills.map((skill) => {
    return (
      <SkillWrapperStyled>
        <IconStyled src={skill.image} alt="" />
        <p key={skill.name}>{skill.name}</p>
      </SkillWrapperStyled>
    );
  });

  return (
    <SkillsStyled>
      <h1>My Skills</h1>
      <SkillsListStyled>{skillSet}</SkillsListStyled>
    </SkillsStyled>
  );
};
