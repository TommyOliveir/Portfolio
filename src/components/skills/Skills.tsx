import { IconStyled, SkillsListStyled, SkillsSectionStyled, SkillWrapperStyled } from './styles';
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
    <SkillsSectionStyled>
      <h2>My TechStacks</h2>
      <SkillsListStyled>{skillSet}</SkillsListStyled>
    </SkillsSectionStyled>
  );
};
