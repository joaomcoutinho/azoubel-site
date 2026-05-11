export type ProjectCategory = 'gestao' | 'planejamento' | 'execucao' | 'ornamentacao'
export type ProjectStatus = 'concluido' | 'andamento'

export interface ProjectHighlight {
  value: string
  label: string
}

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
  highlights?: ProjectHighlight[]
}
