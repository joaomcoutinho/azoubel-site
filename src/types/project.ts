export type ProjectCategory = 'gestao' | 'planejamento' | 'ornamentacao'
export type ProjectStatus = 'concluido' | 'andamento'

export interface Project {
  slug: string
  name: string
  location: string
  categories: ProjectCategory[]
  status: ProjectStatus
  coverImage: string
  gallery: string[]
  overview: string
  scope: string[]
  challenges: string
  solutions: string
  executionStatus: string
  technicalInfo: string
}
