// import { styled } from '@mui/system'

// export const ServicesWrapperStyled = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   padding: '3rem 1rem',
//   maxWidth: '1200px',
//   margin: '0 auto',
// })

// export const HeaderContainerStyled = styled('div')({
//   textAlign: 'center',
//   marginBottom: '3rem',
// })

// export const TitleStyled = styled('h2')(({ theme }) => ({
//   fontSize: '2rem',
//   fontWeight: 800,
//   letterSpacing: '-0.025em',
//   color: theme.palette.mode === 'dark' ? '#fff' : '#0f172a',
//   margin: 0,
//   [theme.breakpoints.up('sm')]: {
//     fontSize: '2.25rem',
//   },
// }))

// export const SubtitleStyled = styled('p')(({ theme }) => ({
//   marginTop: '0.75rem',
//   fontSize: '1.125rem',
//   color: theme.palette.mode === 'dark' ? '#94a3b8' : '#475569',
//   maxWidth: '600px',
// }))

// export const ServicesListStyled = styled('div')(({ theme }) => ({
//   display: 'grid',
//   gridTemplateColumns: '1fr',
//   gap: '2rem',
//   width: '100%',
//   [theme.breakpoints.up('md')]: {
//     gridTemplateColumns: 'repeat(3, 1fr)',
//   },
// }))

// export const ServiceCardStyled = styled('div')<{ highlight?: boolean }>(({ theme, highlight }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   justifyContent: 'space-between',
//   padding: '1.5rem',
//   borderRadius: '16px',
//   border: `1px solid ${
//     highlight
//       ? '#6366f1'
//       : theme.palette.mode === 'dark'
//       ? '#1e293b'
//       : '#e2e8f0'
//   }`,
//   backgroundColor: highlight
//     ? theme.palette.mode === 'dark'
//       ? 'rgba(99, 102, 241, 0.1)'
//       : '#f5f3ff'
//     : theme.palette.mode === 'dark'
//     ? '#0f172a'
//     : '#ffffff',
//   boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
//   transition: 'transform 0.2s ease, box-shadow 0.2s ease',
//   '&:hover': {
//     boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
//     transform: 'translateY(-2px)',
//   },
// }))

// export const BadgeStyled = styled('span')<{ highlight?: boolean }>(({ theme, highlight }) => ({
//   alignSelf: 'flex-start',
//   fontSize: '0.75rem',
//   fontWeight: 600,
//   padding: '0.25rem 0.625rem',
//   borderRadius: '9999px',
//   marginBottom: '1rem',
//   backgroundColor: highlight
//     ? theme.palette.mode === 'dark'
//       ? '#312e81'
//       : '#e0e7ff'
//     : theme.palette.mode === 'dark'
//     ? '#1e293b'
//     : '#f1f5f9',
//   color: highlight
//     ? theme.palette.mode === 'dark'
//       ? '#c7d2fe'
//       : '#4338ca'
//     : theme.palette.mode === 'dark'
//     ? '#94a3b8'
//     : '#475569',
// }))

// export const CardTitleStyled = styled('h3')(({ theme }) => ({
//   fontSize: '1.25rem',
//   fontWeight: 700,
//   margin: '0 0 0.75rem 0',
//   color: theme.palette.mode === 'dark' ? '#fff' : '#0f172a',
// }))

// export const CardDescriptionStyled = styled('p')(({ theme }) => ({
//   fontSize: '0.875rem',
//   lineHeight: '1.6',
//   color: theme.palette.mode === 'dark' ? '#94a3b8' : '#475569',
//   margin: '0 0 1.5rem 0',
// }))

// export const SkillsContainerStyled = styled('div')(({ theme }) => ({
//   paddingTop: '1rem',
//   borderTop: `1px solid ${
//     theme.palette.mode === 'dark' ? '#1e293b' : '#f1f5f9'
//   }`,
// }))

// export const SkillsLabelStyled = styled('p')({
//   fontSize: '0.75rem',
//   fontWeight: 600,
//   textTransform: 'uppercase',
//   letterSpacing: '0.05em',
//   color: '#94a3b8',
//   margin: '0 0 0.5rem 0',
// })

// export const SkillsListStyled = styled('div')({
//   display: 'flex',
//   flexWrap: 'wrap',
//   gap: '0.375rem',
// })

// export const SkillTagStyled = styled('span')(({ theme }) => ({
//   fontSize: '0.75rem',
//   fontWeight: 500,
//   padding: '0.125rem 0.5rem',
//   borderRadius: '4px',
//   backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f1f5f9',
//   color: theme.palette.mode === 'dark' ? '#cbd5e1' : '#334155',
// }))

import { styled } from '@mui/system'

export const ServicesWrapperStyled = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '3rem 1rem',
  maxWidth: '1200px',
  margin: '0 auto',
})

export const HeaderContainerStyled = styled('div')({
  textAlign: 'center',
  marginBottom: '3rem',
})

export const TitleStyled = styled('h2')(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 800,
  letterSpacing: '-0.025em',
  color: theme.palette.mode === 'dark' ? '#fff' : '#0f172a',
  margin: 0,
  [theme.breakpoints.up('sm')]: {
    fontSize: '2.25rem',
  },
}))

export const SubtitleStyled = styled('p')(({ theme }) => ({
  marginTop: '0.75rem',
  fontSize: '1.125rem',
  color: theme.palette.mode === 'dark' ? '#94a3b8' : '#475569',
  maxWidth: '650px',
  lineHeight: '1.6',
}))

export const ServicesListStyled = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr',
  gap: '2rem',
  width: '100%',
  marginBottom: '4rem',
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}))

export const ServiceCardStyled = styled('div')<{ highlight?: boolean }>(({ theme, highlight }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '1.5rem',
  borderRadius: '16px',
  border: `1px solid ${
    highlight
      ? '#6366f1'
      : theme.palette.mode === 'dark'
      ? '#1e293b'
      : '#e2e8f0'
  }`,
  backgroundColor: highlight
    ? theme.palette.mode === 'dark'
      ? 'rgba(99, 102, 241, 0.1)'
      : '#f5f3ff'
    : theme.palette.mode === 'dark'
    ? '#0f172a'
    : '#ffffff',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  '&:hover': {
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    transform: 'translateY(-2px)',
  },
}))

export const BadgeStyled = styled('span')<{ highlight?: boolean }>(({ theme, highlight }) => ({
  alignSelf: 'flex-start',
  fontSize: '0.75rem',
  fontWeight: 600,
  padding: '0.25rem 0.625rem',
  borderRadius: '9999px',
  marginBottom: '1rem',
  backgroundColor: highlight
    ? theme.palette.mode === 'dark'
      ? '#312e81'
      : '#e0e7ff'
    : theme.palette.mode === 'dark'
    ? '#1e293b'
    : '#f1f5f9',
  color: highlight
    ? theme.palette.mode === 'dark'
      ? '#c7d2fe'
      : '#4338ca'
    : theme.palette.mode === 'dark'
    ? '#94a3b8'
    : '#475569',
}))

export const CardTitleStyled = styled('h3')(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  margin: '0 0 0.75rem 0',
  color: theme.palette.mode === 'dark' ? '#fff' : '#0f172a',
}))

export const CardDescriptionStyled = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  lineHeight: '1.6',
  color: theme.palette.mode === 'dark' ? '#94a3b8' : '#475569',
  margin: '0 0 1.5rem 0',
}))

export const SkillsContainerStyled = styled('div')(({ theme }) => ({
  paddingTop: '1rem',
  borderTop: `1px solid ${
    theme.palette.mode === 'dark' ? '#1e293b' : '#f1f5f9'
  }`,
}))

export const SkillsLabelStyled = styled('p')({
  fontSize: '0.75rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#94a3b8',
  margin: '0 0 0.5rem 0',
})

export const SkillsListStyled = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.375rem',
})

export const SkillTagStyled = styled('span')(({ theme }) => ({
  fontSize: '0.75rem',
  fontWeight: 500,
  padding: '0.125rem 0.5rem',
  borderRadius: '4px',
  backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f1f5f9',
  color: theme.palette.mode === 'dark' ? '#cbd5e1' : '#334155',
}))

/* Value Proposition & CTA Section Styles */

export const ValuePropContainerStyled = styled('div')(({ theme }) => ({
  width: '100%',
  borderRadius: '16px',
  padding: '2.5rem 2rem',
  textAlign: 'center',
  backgroundColor: theme.palette.mode === 'dark' ? '#1e293b' : '#f8fafc',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#e2e8f0'}`,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.5rem',
}))

export const ValuePropTitleStyled = styled('h3')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 700,
  margin: 0,
  color: theme.palette.mode === 'dark' ? '#fff' : '#0f172a',
}))

export const ValuePropTextStyled = styled('p')(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: '1.6',
  color: theme.palette.mode === 'dark' ? '#cbd5e1' : '#475569',
  maxWidth: '700px',
  margin: 0,
}))

export const CtaBoxStyled = styled('div')(({ theme }) => ({
  marginTop: '1rem',
  padding: '1.5rem',
  borderRadius: '12px',
  backgroundColor: theme.palette.mode === 'dark' ? '#0f172a' : '#ffffff',
  border: `1px solid ${theme.palette.mode === 'dark' ? '#334155' : '#cbd5e1'}`,
  maxWidth: '600px',
  width: '100%',
}))

export const CtaTitleStyled = styled('h4')(({ theme }) => ({
  fontSize: '1.125rem',
  fontWeight: 600,
  margin: '0 0 0.5rem 0',
  color: theme.palette.mode === 'dark' ? '#c7d2fe' : '#4338ca',
}))

export const CtaTextStyled = styled('p')(({ theme }) => ({
  fontSize: '0.875rem',
  color: theme.palette.mode === 'dark' ? '#94a3b8' : '#64748b',
  margin: 0,
  lineHeight: '1.5',
}))