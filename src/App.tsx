/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Stethoscope, 
  Brain, 
  Leaf, 
  ChevronRight, 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  ArrowRight,
  Sparkles,
  Heart,
  ShieldCheck
} from 'lucide-react';

const DRA_NAME = "Dra. Claudia";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'psychoanalysis',
      title: 'Psicoanálisis',
      subtitle: 'Especializado en Análisis de Sueños',
      icon: <Brain className="w-8 h-8" />,
      description: 'Un espacio seguro para explorar el inconsciente, entender patrones profundos y encontrar claridad a través del análisis de los sueños y la palabra.',
      details: [
        'Análisis de sueños y simbología',
        'Terapia de asociación libre',
        'Tratamiento de ansiedad y depresión',
        'Desarrollo del autoconocimiento'
      ],
      color: 'bg-indigo-50',
      textColor: 'text-indigo-900',
      iconColor: 'bg-indigo-100 text-indigo-600'
    },
    {
      id: 'medicine',
      title: 'Medicina General',
      subtitle: 'Atención Integral y Preventiva',
      icon: <Stethoscope className="w-8 h-8" />,
      description: 'Enfoque médico humano y detallado, priorizando la prevención y el bienestar físico como base fundamental de una vida saludable.',
      details: [
        'Consulta médica general',
        'Chequeos preventivos',
        'Control de enfermedades crónicas',
        'Orientación en salud integral'
      ],
      color: 'bg-emerald-50',
      textColor: 'text-emerald-900',
      iconColor: 'bg-emerald-100 text-emerald-600'
    },
    {
      id: 'supplements',
      title: 'Suplementación',
      subtitle: 'Bienestar Nutricional Optimizado',
      icon: <Leaf className="w-8 h-8" />,
      description: 'Asesoría profesional en suplementos alimenticios para complementar tu salud, mejorar tu energía y equilibrar las necesidades de tu cuerpo.',
      details: [
        'Guía personalizada de suplementos',
        'Optimización de energía y vitalidad',
        'Apoyo al sistema inmunológico',
        'Equilibrio nutricional avanzado'
      ],
      color: 'bg-amber-50',
      textColor: 'text-amber-900',
      iconColor: 'bg-amber-100 text-amber-600'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.id === activeTab);

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-serif italic text-xl">
              C
            </div>
            <span className="text-xl font-semibold tracking-tight uppercase">{DRA_NAME}</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-sm font-medium hover:text-indigo-600 transition-colors">Inicio</a>
            <a href="#servicios" className="text-sm font-medium hover:text-indigo-600 transition-colors">Servicios</a>
            <a href="#sobre-mi" className="text-sm font-medium hover:text-indigo-600 transition-colors">Sobre Mí</a>
            <a href="#contacto" className="px-5 py-2.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-all">
              Agendar Cita
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              <a href="#inicio" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Inicio</a>
              <a href="#servicios" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Servicios</a>
              <a href="#sobre-mi" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium">Sobre Mí</a>
              <a href="#contacto" onClick={() => setIsMenuOpen(false)} className="text-2xl font-medium text-indigo-600">Agendar Cita</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="inicio" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-indigo-50/50 rounded-l-[100px] hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
                <Sparkles className="w-3 h-3" />
                Salud Integral & Bienestar
              </div>
              <h1 className="text-5xl md:text-7xl font-serif leading-[1.1] mb-8">
                Equilibrio entre <br />
                <span className="italic text-indigo-600">Cuerpo y Mente</span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                Con más de 5 años de experiencia, ofrezco un enfoque único que integra la medicina general con el psicoanálisis profundo, ayudándote a alcanzar un bienestar completo.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#contacto" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-medium hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 flex items-center gap-2">
                  Contactar ahora <ChevronRight className="w-4 h-4" />
                </a>
                <a href="#servicios" className="px-8 py-4 bg-white border border-slate-200 rounded-full font-medium hover:border-indigo-600 hover:text-indigo-600 transition-all">
                  Ver servicios
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
                <img 
                  src="https://i.postimg.cc/CLF2rL3T/111.webp" 
                  alt="Dra. Claudia" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                  <span className="font-bold text-2xl">+5 años</span>
                </div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">De experiencia clínica y psicoanalítica</p>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-100 rounded-full blur-3xl opacity-60" />
              <div className="absolute bottom-20 -right-10 w-32 h-32 bg-amber-100 rounded-full blur-2xl opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Mis Especialidades</h2>
            <p className="text-4xl md:text-5xl font-serif mb-8">Un enfoque holístico para tu salud</p>
            
            {/* Tabs */}
            <div className="flex justify-center gap-2 p-1 bg-slate-100 rounded-full w-fit mx-auto">
              {['all', 'psychoanalysis', 'medicine', 'supplements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    activeTab === tab 
                      ? 'bg-white text-indigo-600 shadow-sm' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {tab === 'all' ? 'Todos' : tab === 'psychoanalysis' ? 'Psicoanálisis' : tab === 'medicine' ? 'Medicina' : 'Suplementos'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, index) => (
                <motion.div
                  layout
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${service.color} p-8 rounded-[32px] border border-transparent hover:border-indigo-200 transition-all group`}
                >
                  <div className={`${service.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className={`text-2xl font-serif mb-2 ${service.textColor}`}>{service.title}</h3>
                  <p className="text-sm font-medium text-slate-500 mb-6 italic">{service.subtitle}</p>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-slate-700">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                  <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-indigo-600 group-hover:gap-4 transition-all">
                    Saber más <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre-mi" className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div>
            <h2 className="text-sm font-bold text-indigo-600 uppercase tracking-[0.2em] mb-4">Sobre Mí</h2>
            <p className="text-4xl font-serif mb-8">Dra. Claudia: Medicina con Alma</p>
            <div className="space-y-6 text-slate-600 leading-relaxed">
              <p>
                Mi formación como médica general me dio las herramientas para entender el cuerpo, pero fue el psicoanálisis lo que me permitió comprender la profundidad de la experiencia humana.
              </p>
              <p>
                Creo firmemente que la salud no es solo la ausencia de enfermedad, sino un estado de equilibrio dinámico entre lo físico, lo emocional y lo nutricional. Por ello, integro la suplementación avanzada como un pilar para fortalecer el organismo desde adentro.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 max-w-md mx-auto">
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-serif text-indigo-600">500+</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Pacientes Atendidos</span>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-3xl font-serif text-indigo-600">100%</span>
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Compromiso Humano</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-slate-900 rounded-[48px] overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/10 blur-3xl" />
            
            <div className="grid lg:grid-cols-2">
              <div className="p-12 md:p-20 text-white">
                <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-[0.2em] mb-6">Contacto</h2>
                <p className="text-4xl md:text-5xl font-serif mb-10">Comienza tu camino hacia el bienestar</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Llámanos</p>
                      <p className="text-xl font-medium">+52 (55) 1234 5678</p>
                    </div>
                  </div>
                  
                  <a 
                    href="https://maps.app.goo.gl/PVayVwRavbeihbtT9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-start gap-6 group"
                  >
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-indigo-600 transition-colors">
                      <MapPin className="w-6 h-6 text-indigo-400 group-hover:text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">Ubicación</p>
                      <p className="text-lg font-medium group-hover:text-indigo-400 transition-colors leading-tight">
                        Emiliano Zapata 59-A, <br />
                        Santa María del Pueblito, Zapopan
                      </p>
                    </div>
                  </a>
                </div>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm p-4 border-l border-white/10 h-[400px] lg:h-auto">
                <iframe 
                  src="https://maps.google.com/maps?q=Emiliano%20Zapata%2059%20-A,%20Santa%20Mar%C3%ADa%20del%20Pueblito,%20Zapopan&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full rounded-[32px] grayscale invert opacity-70"
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white font-serif italic text-sm">
              C
            </div>
            <span className="font-semibold tracking-tight uppercase">{DRA_NAME}</span>
          </div>
          
          <div className="flex gap-8 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacidad</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Términos</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Cookies</a>
          </div>
          
          <p className="text-sm text-slate-400">
            © 2026 {DRA_NAME}. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
