
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background decorative elements with parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-32 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl animate-float"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-32 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl animate-float" 
          style={{ 
            animationDelay: '1s',
            transform: `translateY(${scrollY * -0.3}px)` 
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-400/5 rounded-full blur-3xl animate-float" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(-50%, -50%) translateY(${scrollY * 0.2}px)` 
          }}
        ></div>
      </div>

      <div 
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="text-center">
          {/* Badge with parallax */}
          <div 
            className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-8 animate-pulse-glow"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <Brain className="w-4 h-4 mr-2" />
            Líder en Soluciones de IA Empresarial
          </div>

          {/* Main heading with parallax */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            Transformamos tu
            <span className="block bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
              Negocio con IA
            </span>
          </h1>

          {/* Subheading with parallax */}
          <p 
            className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          >
            Desarrollamos soluciones de Inteligencia Artificial personalizadas para optimizar 
            tu logística, fabricación, procesos y generación de leads.
          </p>

          {/* Stats with parallax */}
          <div 
            className="flex flex-wrap justify-center gap-8 mb-12"
            style={{ transform: `translateY(${scrollY * -0.02}px)` }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">50+</div>
              <div className="text-gray-600">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">95%</div>
              <div className="text-gray-600">Mejora en Eficiencia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600">Soporte Técnico</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Solicitar Demo Gratuita
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              <Zap className="mr-2 w-5 h-5" />
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Trust indicators with parallax */}
          <div 
            className="mt-16"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <p className="text-gray-500 text-sm mb-6">Empresas que confían en Odato:</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="bg-gray-300 h-8 w-24 rounded"></div>
              <div className="bg-gray-300 h-8 w-24 rounded"></div>
              <div className="bg-gray-300 h-8 w-24 rounded"></div>
              <div className="bg-gray-300 h-8 w-24 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
