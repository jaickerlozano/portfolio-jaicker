import React from 'react';
import { motion } from 'motion/react';
import profileImg from '../../assets/img/foto-portfolio.jpg';
import { Code2, Cog, Layout } from 'lucide-react';

export function Story() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image & Glow */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-cyan-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-full border border-white/10 z-10 overflow-hidden">
                <img 
                  src={profileImg} 
                  alt="Jaicker Lozano - Full Stack Developer" 
                  className="w-full h-[130%] object-cover opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700 grayscale hover:grayscale-0 mix-blend-luminosity hover:mix-blend-normal"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </motion.div>

          {/* Story Text */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Ingeniería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Procesos</span> a Código
            </h2>
            
            <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
              <p>
                Comencé mi carrera como <strong>Ingeniero de Procesos</strong>, donde aprendí a optimizar sistemas complejos, analizar cuellos de botella y encontrar soluciones eficientes a problemas estructurales.
              </p>
              <p>
                Esa misma mentalidad analítica la llevé al mundo del desarrollo. Me transformé en <strong>Desarrollador Frontend</strong>, combinando mi pasión por el código limpio con la creación de soluciones web que no solo se ven bien, sino que funcionan de manera impecable y escalable.
              </p>
              <p>
                Hoy, con una base sólida en <span className="text-white font-medium">HTML, CSS y JavaScript</span>, he evolucionado mi stack técnico hacia el desarrollo de aplicaciones dinámicas con <span className="text-indigo-400 font-medium">React y TypeScript</span>. Disfruto diseñando interfaces estéticas y responsivas, priorizando el rendimiento y las buenas prácticas ágiles.
              </p>
            </div>

            {/* Micro-cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <Cog className="text-indigo-400 mb-3" size={24} />
                <h3 className="text-white font-medium mb-1">Análisis</h3>
                <p className="text-sm text-slate-400">De procesos complejos a lógica estructurada.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <Layout className="text-cyan-400 mb-3" size={24} />
                <h3 className="text-white font-medium mb-1">Diseño UI</h3>
                <p className="text-sm text-slate-400">Interfaces limpias con Tailwind CSS.</p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                <Code2 className="text-indigo-400 mb-3" size={24} />
                <h3 className="text-white font-medium mb-1">Desarrollo</h3>
                <p className="text-sm text-slate-400">React, TypeScript y arquitecturas escalables.</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
