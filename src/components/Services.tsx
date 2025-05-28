
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
    <section id="servicios" className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Layered parallax backgrounds */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Deep layer */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 1000) * 0.7}px)` }}
        >
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        {/* Mid layer */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 800) * 0.5}px)` }}
        >
          <div className="absolute top-1/3 right-0 w-64 h-64 bg-purple-400/15 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-cyan-400/10 rounded-full blur-2xl"></div>
        </div>

        {/* Front layer */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${(scrollY - 600) * 0.3}px)` }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-300/20 rounded-full blur-xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header with strong parallax */}
        <div 
          className="text-center mb-20"
          style={{ transform: `translateY(${(scrollY - 800) * 0.2}px)` }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Nuestros Servicios de
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mt-2"> Inteligencia Artificial</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Soluciones integrales de IA diseñadas para transformar cada área de tu negocio desde Ourense
          </p>
        </div>

        {/* Services grid with cascading parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              style={{ 
                transform: `translateY(${(scrollY - 1000 - index * 50) * (0.1 + index * 0.02)}px) rotateY(${(scrollY - 1200) * 0.01}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border-0 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl border border-cyan-500/20 h-full">
                <CardHeader className="text-center pb-4">
                  <div 
                    className="mx-auto w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-cyan-500/30"
                    style={{ transform: `translateZ(20px)` }}
                  >
                    <service.icon className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-500">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-slate-300 mb-6 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="text-sm text-slate-400 flex items-center justify-center group-hover:text-cyan-300 transition-colors duration-300"
                        style={{ transitionDelay: `${featureIndex * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* CTA section with reverse parallax */}
        <div 
          className="text-center mt-24"
          style={{ transform: `translateY(${(scrollY - 1800) * -0.1}px)` }}
        >
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-12">
            <p className="text-slate-300 mb-8 text-lg">¿No encuentras lo que necesitas?</p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-12 py-4 rounded-2xl font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl shadow-lg shadow-cyan-500/30">
              Consultoría Personalizada
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
