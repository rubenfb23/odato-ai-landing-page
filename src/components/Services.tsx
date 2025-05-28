
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Factory, BarChart3, Users, Bot, Cog } from 'lucide-react';
import { useEffect, useState } from 'react';

const Services = () => {
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

  const services = [
    {
      icon: Truck,
      title: 'Logística Inteligente',
      description: 'Optimización de rutas, gestión de inventarios y predicción de demanda con algoritmos de IA avanzados.',
      features: ['Optimización de rutas', 'Gestión predictiva de inventarios', 'Automatización de almacenes']
    },
    {
      icon: Factory,
      title: 'Fabricación 4.0',
      description: 'Mantenimiento predictivo, control de calidad automatizado y optimización de líneas de producción.',
      features: ['Mantenimiento predictivo', 'Control de calidad IA', 'Optimización de producción']
    },
    {
      icon: BarChart3,
      title: 'Optimización de Procesos',
      description: 'Análisis de datos en tiempo real para identificar cuellos de botella y mejorar la eficiencia operacional.',
      features: ['Análisis en tiempo real', 'Detección de anomalías', 'Mejora continua']
    },
    {
      icon: Users,
      title: 'Generación de Leads',
      description: 'IA conversacional y análisis predictivo para identificar y convertir leads de alta calidad.',
      features: ['Chatbots inteligentes', 'Scoring predictivo', 'Automatización de marketing']
    },
    {
      icon: Bot,
      title: 'Automatización RPA',
      description: 'Robots de software inteligentes para automatizar tareas repetitivas y procesos administrativos.',
      features: ['Automatización de tareas', 'Procesamiento de documentos', 'Integración de sistemas']
    },
    {
      icon: Cog,
      title: 'Consultoría IA',
      description: 'Estrategia, implementación y acompañamiento en la transformación digital con IA de tu empresa.',
      features: ['Estrategia IA', 'Implementación personalizada', 'Formación del equipo']
    }
  ];

  return (
    <section id="servicios" className="py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Simplified parallax backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep layer */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 800) * getParallaxMultiplier(0.1)}px)` }}
        >
          <div className="absolute top-0 left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-56 sm:w-80 h-56 sm:h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Mid layer */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 600) * getParallaxMultiplier(0.08)}px)` }}
        >
          <div className="absolute top-1/3 right-0 w-48 sm:w-64 h-48 sm:h-64 bg-purple-400/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-0 w-56 sm:w-72 h-56 sm:h-72 bg-cyan-400/10 rounded-full blur-2xl"></div>
        </div>

        {/* Front layer */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 400) * getParallaxMultiplier(0.05)}px)` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-40 h-32 sm:h-40 bg-blue-300/20 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with controlled parallax */}
        <div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          style={{ transform: `translateY(${(scrollY - 600) * getParallaxMultiplier(0.03)}px)` }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Nuestros Servicios de
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2"> Inteligencia Artificial</span>
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
            Soluciones integrales de IA diseñadas para transformar cada área de tu negocio desde Ourense
          </p>
        </div>

        {/* Services grid with minimal parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{ 
                transform: `translateY(${(scrollY - 800 - index * 20) * getParallaxMultiplier(0.02)}px)`
              }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 border-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 h-full">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg shadow-cyan-500/30">
                    <service.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <CardTitle className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-xs sm:text-sm text-slate-400 flex items-center justify-center group-hover:text-cyan-300 transition-colors duration-300"
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-2 sm:mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA section */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-2xl sm:rounded-3xl p-8 sm:p-12">
            <p className="text-slate-300 mb-6 sm:mb-8 text-base sm:text-lg">¿No encuentras lo que necesitas?</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl shadow-lg shadow-cyan-500/30 text-sm sm:text-base">
              Consultoría Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
