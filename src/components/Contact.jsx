import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    setTimeout(() => {
      alert('Mensagem enviada com sucesso! Entrarei em contato em breve.')
      setFormData({ name: '', email: '', subject: '', message: '' })
      setIsSubmitting(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'mgabriel.moliveira@gmail.com',
      href: 'mailto:mgabriel.moliveira@gmail.com'
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '+55 (15) 98816-6000',
      href: 'tel:+551500000000'
    },
    {
      icon: MapPin,
      label: 'Localização',
      value: 'Sorocaba-SP, Brasil',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://www.google.com/',
      color: 'hover:text-gray-400'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/gabriel-oliveira-290719139/',
      color: 'hover:text-blue-400'
    },
 
  ]

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Vamos <span className="text-emerald-400">Conversar</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos transformar suas ideias em realidade!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Entre em Contato</h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Estou sempre aberto a discutir novos projetos, oportunidades criativas 
                ou parcerias. Não hesite em entrar em contato se quiser conversar sobre 
                desenvolvimento web, UX/UI ou qualquer uma das minhas paixões!
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-slate-700/50 border-slate-600 hover:bg-slate-700 transition-colors">
                  <CardContent className="p-6">
                    <a 
                      href={info.href}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="w-12 h-12 bg-emerald-500/20 rounded-full flex items-center justify-center">
                        <info.icon className="text-emerald-400 group-hover:text-emerald-300 transition-colors" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium group-hover:text-emerald-400 transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Redes Sociais</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-slate-700/50 rounded-full flex items-center justify-center border border-slate-600 hover:border-emerald-400 transition-all duration-200 transform hover:scale-110 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <Card className="bg-gradient-to-r from-emerald-500/20 to-blue-500/20 border-emerald-400/30">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <div>
                    <p className="text-white font-medium">Disponível para novos projetos</p>
                    <p className="text-sm text-gray-400">Responderei em até 24 horas</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Envie uma Mensagem</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Nome *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Assunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors"
                      placeholder="Assunto da mensagem"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Mensagem *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:border-emerald-400 focus:outline-none transition-colors resize-none"
                      placeholder="Conte-me sobre seu projeto ou ideia..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-lg font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                        Enviando...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Enviar Mensagem
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

