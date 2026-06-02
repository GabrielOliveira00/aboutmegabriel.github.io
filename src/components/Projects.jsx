import React, { useState } from 'react'
import { ExternalLink, Github, Filter } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import novaStore from "../assets/images/novaStore.jpg"
import pulse from "../assets/images/pulse.jpg"
import signal from "../assets/images/signal.jpg"
import focus from "../assets/images/focus.jpg"
import raiz from "../assets/images/raiz.jpg"



const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'E-commerce Responsivo - Nova Store',
      description: 'Plataforma completa de e-commerce com carrinho de compras, sistema de pagamento e painel administrativo.',
      image: novaStore,
      technologies: ['React', 'CSS3', 'JavaScript', 'Typescript'],
      category: 'web',
      demoUrl: 'https://gabrieloliveira00.github.io/nova-store-portfolio/',
      githubUrl: 'https://github.com/GabrielOliveira00/nova-store-portfolio',
      featured: true
    },
    {
      id: 2,
      title: 'Landing Page Corporativa',
      description: 'Dados, automações e operação em uma interface feita para vender.',
      image: pulse,
      technologies: ['React', 'JavaScript', 'RESTful API'],
      category: 'landing',
      demoUrl: 'https://gabrieloliveira00.github.io/portf-lio-pulse-project/',
      githubUrl: 'https://github.com/GabrielOliveira00/portf-lio-pulse-project',
      featured: true
    },
    {
      id: 3,
      title: 'Signal Deck',
      description: 'Pesquise em qualquer conta pública para inspecionar o volume do repositório, a ariedade de idiomas, a frequência de atualizações e o desempenho do repositório',
      image: signal,
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'web',
      demoUrl: 'https://gabrieloliveira00.github.io/signal-deck-portfolio/',
      githubUrl: 'https://github.com/GabrielOliveira00/signal-deck-portfolio',
      featured: false
    },
    {
      id: 4,
      title: 'Focus - App de Gerenciamento',
      description: 'FocusFlow e um app de produtividade pessoal. Voce adiciona tarefas, define contexto, energia e janela ideal, depois acompanha o dia com mudanca de status e revisao de foco.',
      image: focus,
      technologies: ['React', 'Firebase', 'CSS3'],
      category: 'app',
      demoUrl: 'https://gabrieloliveira00.github.io/focus-flow-portfolio/',
      githubUrl: 'https://github.com/GabrielOliveira00/focus-flow-portfolio',
      featured: false
    },
    {
      id: 5,
      title: 'Raiz Atelier - Page com animações 3D',
      description: 'FocusFlow e um app de produtividade pessoal. Voce adiciona tarefas, define contexto, energia e janela ideal, depois acompanha o dia com mudanca de status e revisao de foco.',
      image: raiz,
      technologies: ['React', 'Framer Motion', 'Vite', 'babylon.js', 'Typescript'],
      category: 'app',
      demoUrl: 'https://gabrieloliveira00.github.io/raiz-atelier-portfolio/',
      githubUrl: 'https://github.com/GabrielOliveira00/raiz-atelier-portfolio',
      featured: false
    }
  ]

  const filters = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'web', label: 'Web Apps' },
    { id: 'landing', label: 'Landing Pages' },
    { id: 'app', label: 'Aplicações' },
    { id: 'portfolio', label: 'Portfolios' }
  ]

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedFilter)

  const getTechColor = (tech) => {
    const colors = {
      'React': 'bg-blue-500/20 text-blue-400 border-blue-400/30',
      'JavaScript': 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30',
      'CSS3': 'bg-purple-500/20 text-purple-400 border-purple-400/30',
      'HTML5': 'bg-orange-500/20 text-orange-400 border-orange-400/30',
      'Typescript': 'bg-red-500/20 text-red-400 border-red-400/30',
      'RESTful API': 'bg-green-500/20 text-green-400 border-green-400/30'
    }
    return colors[tech] || 'bg-gray-500/20 text-gray-400 border-gray-400/30'
  }

  return (
    <section id="projects" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="text-emerald-400">Projetos</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Uma seleção dos meus trabalhos mais recentes e impactantes
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter.id}
                variant={selectedFilter === filter.id ? "default" : "outline"}
                onClick={() => setSelectedFilter(filter.id)}
                className={`${
                  selectedFilter === filter.id 
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-white' 
                    : 'border-slate-600 text-gray-400 hover:text-white hover:border-emerald-400'
                } transition-all duration-200`}
              >
                <Filter className="mr-2" size={16} />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id}
              className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 group overflow-hidden"
            >
            
              <div className="relative overflow-hidden">
                <div className="w-full h-62 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                  <img src={project.image}></img>
                </div>
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-emerald-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Destaque
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.demoUrl}
                    target="_blank"                             
                  >
                    <Button size="sm" variant="outline" className="border-white hover:cursor-pointer hover:opacity-90">
                      <ExternalLink size={16} className="mr-2" />
                      Demo
                    </Button>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                 
                  >
                  <Button size="sm" variant="outline" className="border-white hover:cursor-pointer hover:opacity-90">
                    <Github size={16} className="mr-2" />
                    Código
                  </Button>
                  </a>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium border ${getTechColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Gostou do que viu? Vamos trabalhar juntos no seu próximo projeto!
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105"
          >
            Iniciar um Projeto
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Projects

