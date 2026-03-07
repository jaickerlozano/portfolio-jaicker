import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10 bg-slate-900/50 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">colaborar?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10">
              Actualmente estoy abierto a nuevas oportunidades. Ya sea que tengas una pregunta, una propuesta de proyecto, o solo quieras decir hola, ¡escríbeme!
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <MapPin className="text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Ubicación</h4>
                  <p className="text-slate-400">Santiago, Chile</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 shrink-0">
                  <Mail className="text-indigo-400" size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Email</h4>
                  <a href="mailto:hola@jaickerlozano.com" className="text-slate-400 hover:text-cyan-400 transition-colors">hola@jaickerlozano.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 p-8 border border-white/10 rounded-2xl backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                <input 
                  type="text" 
                  placeholder="Tu nombre" 
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Correo</label>
                <input 
                  type="email" 
                  placeholder="tu@email.com" 
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                <textarea 
                  rows={4} 
                  placeholder="¿En qué puedo ayudarte?" 
                  className="w-full bg-slate-950 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-slate-600 resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/25 group">
                Enviar Mensaje
                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
