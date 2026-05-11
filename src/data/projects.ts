import type { Project } from '../types/project'

import _c1 from '../../obras_selfit_imagens/obra_finalizada2.png'
import _c3 from '../../obras_selfit_imagens/obra_finalizada.png'
import _c4 from '../../obras_selfit_imagens/obra.png'
import _c5 from '../../obra_royal_imagens/obra_final.png'
import _c7 from '../../obras_selfit_imagens/obra2.png'
import _c8 from '../../obras_selfit_imagens/obra3.png'
import _c9 from '../../obras_selfit_imagens/obra4.png'
import _c10 from '../../obra_royal_imagens/obra_final2.png'
import _c11 from '../../obra_royal_imagens/obra1_royal.png'

/** Imagens da empresa */
const IMG = {
  c1: _c1,
  c2: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80',
  c3: _c3,
  c4: _c4,
  c5: _c5,
  c6: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1600&q=80',
  c7: _c7,
  c8: _c8,
  c9: _c9,
  c10: _c10,
  c11: _c11,
}
export const projects: Project[] = [
  {
    slug: 'Academia Selfit',
    name: 'Academia Selfit',
    location: 'Natal, RN',
    categories: ['gestao', 'execucao'],
    status: 'concluido',
    coverImage: IMG.c3,
    gallery: [IMG.c3, IMG.c1, IMG.c4, IMG.c7, IMG.c8, IMG.c9],
    overview:
      'Gerenciamento completo da execução estrutural e acabamento de uma unidade da Selfit, uma marca forte e com presença nacionalmente',
    scope: [
      'Planejamento e controle integrado ao cronograma mestre.',
      'Supervisão de instalações e compatibilização de projeto.',
      'Gestão da qualidade e da comunicação entre stakeholders.',
    ],
    challenges:
      " Em unidades de academia, a infraestrutura de climatização e elétrica precisa ser instalada em perfeita sincronia com a alvenaria e os revestimentos. O monitoramento contínuo permitiu que a JMA Construções entregasse um ativo pronto para operar, sem a necessidade de ajustes pós-inauguração.",
    solutions:
      'Sequenciamento em fases com entregas parciais assinadas, buffer operacional nos marcos críticos e cadência fixa de relatórios aos decisores.',
    executionStatus:
      'Entrega dentro do período pactuado, com checklist de ocupação cumprido e documentação técnica consolidada.',
    technicalInfo:
      'Área aproximada de intervenção sob gestão: 2.000 m² · Padrões de segurança NR aplicáveis durante toda obra.',
    highlights: [
      { value: '2.000 m²', label: 'Área gerenciada' },
      { value: '45 dias', label: 'Prazo de entrega' },
      { value: '100%', label: 'Checklist de ocupação' },
    ],
  },
  {
    slug: 'royal-tenis',
    name: 'Royal Tênis Clube',
    location: 'Recife, PE',
    categories: ['execucao', 'ornamentacao'],
    status: 'concluido',
    coverImage: IMG.c5,
    gallery: [IMG.c5, IMG.c10, IMG.c11],
    overview:
      'Em pouco tempo, reorganizamos o fluxo da obra, estabelecemos uma comunicação clara entre as partes e alinhamos os esforços com foco no objetivo comum: a entrega.',
    scope: [
      'Coordenação de empreiteiros especializados e recebimento de materiais nobres.',
      'Detalhes de marcenaria sob medida integrados ao layout arquitetônico.',
    ],
    challenges:
      'três empresas atuando simultaneamente no canteiro, comunicação desalinhada e dificuldades na coordenação das atividades.',
    solutions:
      'Com gestão ativa, presença diária e foco em integração, a obra foi finalizada em aproximadamente 45 dias.',
    executionStatus:
      'Etapa atual: acabamentos finais e ornamental — previsível para fechamento com marcos já acordados com o cliente.',
    technicalInfo:
      'Gestão técnica com registro atualizado • Relatório fotográfico quinzenal.',
    highlights: [
      { value: '45 dias', label: 'Prazo de entrega' },
      { value: '3', label: 'Equipes coordenadas' },
      { value: 'Recife, PE', label: 'Localização' },
    ],
  },
  
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
