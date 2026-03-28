import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Passions from './components/Passions'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingElements from './components/FloatingElements'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-x-hidden">
        <FloatingElements />
        <Header />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          {/*
          <Projects />
           */}
          <Passions />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

