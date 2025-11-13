import { ReactNode } from 'react'
import { SectionStyled } from './styles.ts'

interface ISectionProps {
  children: ReactNode
}

export const Section = ({ children }: ISectionProps) => {
  return <SectionStyled>{children}</SectionStyled>
}
