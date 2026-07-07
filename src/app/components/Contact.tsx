import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/mblpddvd', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section
      id="contact"
      className="py-24 relative z-10 bg-surface/50 border-t border-[var(--glass-border)]"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              {t('contact.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 dark:from-indigo-400 dark:to-cyan-400">
                {t('contact.titleHighlight')}
              </span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10">{t('contact.description')}</p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--glass)] flex items-center justify-center border border-[var(--glass-border)] shrink-0">
                  <MapPin className="text-cyan-500 dark:text-cyan-400" size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">{t('contact.location')}</h4>
                  <p className="text-muted-foreground">{t('contact.locationValue')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[var(--glass)] flex items-center justify-center border border-[var(--glass-border)] shrink-0">
                  <Mail className="text-indigo-500 dark:text-indigo-400" size={20} />
                </div>
                <div>
                  <h4 className="text-foreground font-medium mb-1">{t('contact.email')}</h4>
                  <a
                    href="mailto:jlozano.devcode@gmail.com"
                    className="text-muted-foreground hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    jlozano.devcode@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[var(--glass)] p-8 border border-[var(--glass-border)] rounded-2xl backdrop-blur-sm"
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  className="block text-sm font-medium text-muted-foreground mb-2"
                  htmlFor="name"
                >
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t('contact.form.namePlaceholder')}
                  required
                  className="w-full bg-surface-muted border border-[var(--glass-border)] rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-muted-foreground mb-2"
                  htmlFor="email"
                >
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t('contact.form.emailPlaceholder')}
                  required
                  className="w-full bg-surface-muted border border-[var(--glass-border)] rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-muted-foreground"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium text-muted-foreground mb-2"
                  htmlFor="message"
                >
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t('contact.form.messagePlaceholder')}
                  required
                  className="w-full bg-surface-muted border border-[var(--glass-border)] rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all placeholder:text-muted-foreground resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-gradient-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 disabled:opacity-50 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-indigo-500/25 group"
              >
                {status === 'loading' ? t('contact.form.sending') : t('contact.form.submit')}
                {status !== 'loading' && (
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              {status === 'success' && (
                <p className="text-green-500 dark:text-green-400 text-center mt-4">
                  {t('contact.form.success')}
                </p>
              )}
              {status === 'error' && (
                <p className="text-red-500 dark:text-red-400 text-center mt-4">
                  {t('contact.form.error')}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
