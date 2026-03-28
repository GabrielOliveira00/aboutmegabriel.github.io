import React, { useState } from 'react'
import { Code, Heart, Fish, Target } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import codingPassion from '../assets/images/coding-passion.png'

const Passions = () => {
  const [activePassion, setActivePassion] = useState(0)

  const passions = [
    {
      id: 0,
      title: 'Codar',
      icon: Code,
      color: 'emerald',
      description: 'Minha maior paixão é transformar ideias em código. Cada linha escrita é uma oportunidade de criar algo incrível e resolver problemas reais.',
      details: [
        'Desenvolvimento de soluções inovadoras',
        'Aprendizado constante de novas tecnologias',
        'Dar vida a ideias',
      ],
      image: codingPassion,
      emoji: '💻'
    },
    {
      id: 1,
      title: 'Cachorros',
      icon: Heart,
      color: 'orange',
      description: 'Os cachorros me ensinam sobre lealdade, alegria e viver o momento presente. Eles são meus companheiros fiéis e fonte de inspiração diária.',
      details: [
        'Cuidado e bem-estar animal',
        'Amor sem igual',
        'Passeios e atividades ao ar livre',
        'Treinamento e educação canina',
      ],
      image: '/api/placeholder/300/200',
      emoji: '🐕'
    },
    {
      id: 2,
      title: 'Pesca',
      icon: Fish,
      color: 'blue',
      description: 'A pesca me conecta com a natureza e me ensina paciência. É meu momento de reflexão e renovação de energias.',
      details: [
        'Renovação de energias',
        'Momentos de contemplação na natureza'
      ],
      image: '/api/placeholder/300/200',
      emoji: '🎣'
    },
    {
      id: 3,
      title: 'Arquearia',
      icon: Target,
      color: 'purple',
      description: 'A arquearia desenvolve meu foco, disciplina e precisão. Cada tiro é uma lição sobre concentração e autocontrole.',
      details: [
        'Técnicas de tiro com arco',
        'Disciplina mental e física',
        'Filosofia do tiro instintivo'
      ],
      image: '/api/placeholder/300/200',
      emoji: '🏹'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      emerald: {
        bg: 'bg-emerald-500',
        text: 'text-emerald-400',
        border: 'border-emerald-400',
        gradient: 'from-emerald-500/20 to-emerald-600/20'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-400',
        border: 'border-orange-400',
        gradient: 'from-orange-500/20 to-orange-600/20'
      },
      blue: {
        bg: 'bg-blue-500',
        text: 'text-blue-400',
        border: 'border-blue-400',
        gradient: 'from-blue-500/20 to-blue-600/20'
      },
      purple: {
        bg: 'bg-purple-500',
        text: 'text-purple-400',
        border: 'border-purple-400',
        gradient: 'from-purple-500/20 to-purple-600/20'
      }
    }
    return colors[color]
  }

  return (
    <section id="passions" className="bg-slate-700/50 border-slate-600 transition-colors pb-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 pt-14">
            Minhas <span className="text-emerald-400">Paixões</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            As atividades que me inspiram e moldam quem sou como pessoa e profissional
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {passions.map((passion, index) => {
              const colors = getColorClasses(passion.color)
              const isActive = activePassion === index
              
              return (
                <Card 
                  key={passion.id}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    isActive 
                      ? `bg-gradient-to-r ${colors.gradient} border-2 ${colors.border}` 
                      : 'bg-slate-800/50 border-slate-600 hover:bg-slate-700/50'
                  }`}
                  onClick={() => setActivePassion(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 rounded-full ${colors.bg}/20 flex items-center justify-center`}>
                        <passion.icon className={colors.text} size={32} />
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-2xl font-bold mb-2 ${isActive ? colors.text : 'text-white'}`}>
                          {passion.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {passion.description}
                        </p>
                      </div>
                      <div className="text-4xl">
                        {passion.emoji}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <div className="relative mb-8">
                <div className="w-full h-64 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex items-center justify-center overflow-hidden">
                  {activePassion === 0 ? (
                    <img 
                      src={codingPassion} 
                      alt={passions[activePassion].title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="text-8xl opacity-50">
                      {passions[activePassion].emoji}
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">{passions[activePassion].emoji}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Por que amo {passions[activePassion].title.toLowerCase()}?
              </h3>
              <div className="space-y-4">
                {passions[activePassion].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full ${getColorClasses(passions[activePassion].color).bg} mt-2 flex-shrink-0`} />
                    <p className="text-gray-300 leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h4 className="text-lg font-semibold text-white mb-3">
                Como isso influencia meu trabalho?
              </h4>
              <p className="text-gray-400 leading-relaxed">
                {activePassion === 0 && "A paixão por programação me mantém sempre atualizado e motivado a criar soluções cada vez melhores."}
                {activePassion === 1 && "A convivência com cachorros me ensina sobre empatia, comunicação não-verbal e trabalho em equipe."}
                {activePassion === 2 && "A pesca desenvolve minha paciência e capacidade de manter o foco mesmo em situações desafiadoras."}
                {activePassion === 3 && "A arquearia aprimora minha precisão, disciplina e capacidade de concentração em detalhes importantes."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Passions

