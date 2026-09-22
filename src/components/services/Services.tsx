// import React from 'react'
// import { Section } from '../common/section/Section'
// import {
//   ServicesWrapperStyled,
//   HeaderContainerStyled,
//   TitleStyled,
//   SubtitleStyled,
//   ServicesListStyled,
//   ServiceCardStyled,
//   BadgeStyled,
//   CardTitleStyled,
//   CardDescriptionStyled,
//   SkillsContainerStyled,
//   SkillsLabelStyled,
//   SkillsListStyled,
//   SkillTagStyled,
// } from './styles'

// export const Services = () => {
//   const services = [
//     {
//       title: 'Frontend Development',
//       badge: 'Core Expertise',
//       description:
//         'Building fast, accessible, and responsive user interfaces using modern web technologies. Deep focus on user experience, component architecture, and state management.',
//       skills: ['React', 'TypeScript', 'HTML5 / CSS3', 'Next.js'],
//       highlight: true,
//     },
//     {
//       title: 'Fullstack & Backend',
//       badge: 'Transitioning & Expanding',
//       description:
//         'Developing scalable backend services and APIs to connect rich frontend interfaces. Actively building production-ready applications with modern Node.js frameworks.',
//       skills: ['Node.js', 'NestJS', 'REST APIs', 'PostgreSQL / MongoDB', 'Express'],
//       highlight: false,
//     },
//     {
//       title: 'API Integration & Architecture',
//       badge: 'End-to-End',
//       description:
//         'Connecting frontend UI to backend microservices, handling client-side caching, data fetching, authentication, and database schemas.',
//       skills: ['RESTful Services', 'Authentication (JWT)', 'ORM (Prisma/TypeORM)', 'Git & CI/CD'],
//       highlight: false,
//     },
//   ]

//   return (
//     <Section>
//       <ServicesWrapperStyled id="services">
//         {/* Header */}
//         <HeaderContainerStyled>
//           <TitleStyled>Services & Expertise</TitleStyled>
//           <SubtitleStyled>
//             Specializing in rich frontend experiences and expanding fullstack capabilities with Node.js and NestJS.
//           </SubtitleStyled>
//         </HeaderContainerStyled>

//         {/* Services Grid */}
//         <ServicesListStyled>
//           {services.map((service, index) => (
//             <ServiceCardStyled key={index} highlight={service.highlight}>
//               <div>
//                 <BadgeStyled highlight={service.highlight}>{service.badge}</BadgeStyled>
//                 <CardTitleStyled>{service.title}</CardTitleStyled>
//                 <CardDescriptionStyled>{service.description}</CardDescriptionStyled>
//               </div>

//               <SkillsContainerStyled>
//                 <SkillsLabelStyled>Technologies</SkillsLabelStyled>
//                 <SkillsListStyled>
//                   {service.skills.map((skill, sIdx) => (
//                     <SkillTagStyled key={sIdx}>{skill}</SkillTagStyled>
//                   ))}
//                 </SkillsListStyled>
//               </SkillsContainerStyled>
//             </ServiceCardStyled>
//           ))}
//         </ServicesListStyled>
//       </ServicesWrapperStyled>
//     </Section>
//   )
// }
import { Section } from '../common/section/Section'
import {
  ServicesWrapperStyled,
  HeaderContainerStyled,
  TitleStyled,
  SubtitleStyled,
  ServicesListStyled,
  ServiceCardStyled,
  BadgeStyled,
  CardTitleStyled,
  CardDescriptionStyled,
  SkillsContainerStyled,
  SkillsLabelStyled,
  SkillsListStyled,
  SkillTagStyled,
  ValuePropContainerStyled,
  ValuePropTitleStyled,
  ValuePropTextStyled,
  CtaBoxStyled,
  CtaTitleStyled,
  CtaTextStyled,
} from './styles'

export const Services = () => {
  const services = [
    {
      title: 'Frontend Development',
      badge: 'Core Expertise',
      description:
        'Building fast, accessible, and responsive user interfaces using modern web technologies. Deep focus on user experience, component architecture, and state management.',
      skills: ['React', 'TypeScript', 'HTML5 / CSS3', 'Next.js'],
      highlight: true,
    },
    {
      title: 'Fullstack & Backend',
      badge: 'Transitioning & Expanding',
      description:
        'Developing scalable backend services and APIs to connect rich frontend interfaces. Actively building production-ready applications with modern Node.js frameworks.',
      skills: ['Node.js', 'NestJS', 'REST APIs', 'PostgreSQL / MongoDB', 'Express'],
      highlight: false,
    },
    {
      title: 'API Integration & Architecture',
      badge: 'End-to-End',
      description:
        'Connecting frontend UI to backend microservices, handling client-side caching, data fetching, authentication, and database schemas.',
      skills: ['RESTful Services', 'Authentication (JWT)', 'ORM (Prisma/TypeORM)', 'Git & CI/CD'],
      highlight: false,
    },
  ]

  return (
    <Section>
      <ServicesWrapperStyled id="services">
        {/* Header */}
        <HeaderContainerStyled>
          <TitleStyled>Services & Expertise</TitleStyled>
          <SubtitleStyled>
            High-quality development without agency-level overhead. Specializing in rich frontend experiences and expanding fullstack capabilities with Node.js and NestJS.
          </SubtitleStyled>
        </HeaderContainerStyled>

        {/* Services Grid */}
        <ServicesListStyled>
          {services.map((service, index) => (
            <ServiceCardStyled key={index} highlight={service.highlight}>
              <div>
                <BadgeStyled highlight={service.highlight}>{service.badge}</BadgeStyled>
                <CardTitleStyled>{service.title}</CardTitleStyled>
                <CardDescriptionStyled>{service.description}</CardDescriptionStyled>
              </div>

              <SkillsContainerStyled>
                <SkillsLabelStyled>Technologies</SkillsLabelStyled>
                <SkillsListStyled>
                  {service.skills.map((skill, sIdx) => (
                    <SkillTagStyled key={sIdx}>{skill}</SkillTagStyled>
                  ))}
                </SkillsListStyled>
              </SkillsContainerStyled>
            </ServiceCardStyled>
          ))}
        </ServicesListStyled>

        {/* Value Proposition & Pricing CTA Section */}
        <ValuePropContainerStyled>
          <ValuePropTitleStyled>Why Work With Me?</ValuePropTitleStyled>
          <ValuePropTextStyled>
            I’m an independent developer based in Hungary, which allows me to offer competitive rates while maintaining a professional, high-quality development process. If you’re looking for a reliable developer without the overhead of a large agency, let’s talk about your project.
          </ValuePropTextStyled>

          <CtaBoxStyled>
            <CtaTitleStyled>Have a limited budget?</CtaTitleStyled>
            <CtaTextStyled>
              I work with startups and small businesses and can adapt the scope of a project to fit your budget.
            </CtaTextStyled>
          </CtaBoxStyled>
        </ValuePropContainerStyled>
      </ServicesWrapperStyled>
    </Section>
  )
}