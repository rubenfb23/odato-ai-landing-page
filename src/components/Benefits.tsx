
import { Shield, Clock, TrendingUp, Headphones } from 'lucide-react';
import { useEffect, useState } from 'react';

const Benefits = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Responsive parallax multipliers
  const getParallaxMultiplier = (base: number) => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? base * 0.2 : base;
    }
    return base;
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: 'ROI Comprobado',
      description: 'Nuestros clientes experimentan un retorno de inversión promedio del 300% en el primer año.',
      stat: '300%',
      statLabel: 'ROI Promedio'
    },
    {
      icon: Clock,
      title: 'Implementación Rápida',
      description: 'Ponemos en marcha tus soluciones de IA en tiempo récord sin interrumpir tus operaciones.',
      stat: '30 días',
      statLabel: 'Tiempo Promedio'
    },
    {
      icon: Shield,
      title: 'Seguridad Garantizada',
      description: 'Cumplimos con los más altos estándares de seguridad y protección de datos empresariales.',
      stat: '99.9%',
      statLabel: 'Uptime Garantizado'
    },
    {
      icon: Headphones,
      title: 'Soporte 24/7',
      description: 'Nuestro equipo de expertos está disponible las 24 horas para asegurar el éxito de tu proyecto.',
      stat: '24/7',
      statLabel: 'Soporte Disponible'
    }
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-800 to-slate-700 relative overflow-hidden">
      {/* Simplified parallax backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 1400) * getParallaxMultiplier(0.08)}px)` }}
        >
          <div className="absolute top-1/4 left-1/6 w-56 sm:w-80 h-56 sm:h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/6 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/8 rounded-full blur-3xl"></div>
        </div>
        
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 1200) * getParallaxMultiplier(0.05)}px)` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-blue-400/15 rounded-full blur-2xl"></div>
        </div>

        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 1600) * getParallaxMultiplier(0.03)}px)` }}
        >
          <div className="absolute top-0 right-1/3 w-32 sm:w-48 h-32 sm:h-48 bg-cyan-300/20 rounded-full blur-xl"></div>
          <div className="absolute bottom-0 left-1/3 w-40 sm:w-56 h-40 sm:h-56 bg-purple-300/15 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with controlled parallax */}
        <div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          style={{ transform: `translateY(${(scrollY - 1400) * getParallaxMultiplier(0.02)}px)` }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            ¿Por qué elegir
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mt-2"> Odato?</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Más que un proveedor, somos tu socio estratégico en la transformación digital con IA desde Ourense
          </p>
        </div>

        {/* Benefits grid with minimal parallax */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group"
              style={{ 
                transform: `translateY(${(scrollY - 1600 - index * 20) * getParallaxMultiplier(0.01)}px)`
              }}
            >
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500 hover:-translate-y-3 hover:scale-105 h-full">
                <div className="mx-auto w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 sm:mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/30">
                  <benefit.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {benefit.stat}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400">{benefit.statLabel}</div>
                </div>
                
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4 group-hover:text-cyan-400 transition-colors duration-500">
                  {benefit.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-500">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-2xl border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 shadow-2xl">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
              Comenzemos tu transformación digital
            </h3>
            <p className="text-base sm:text-lg text-slate-300 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4">
              Agenda una consulta gratuita con nuestros expertos en IA y descubre cómo podemos impulsar tu negocio desde Ourense.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg shadow-cyan-500/30 text-sm sm:text-base">
                Agendar Consulta Gratuita
              </button>
              <button className="border-2 border-cyan-400/50 text-cyan-100 hover:bg-cyan-400/10 backdrop-blur-sm px-8 sm:px-10 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 hover:scale-105 text-sm sm:text-base">
                Descargar Caso de Estudio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
