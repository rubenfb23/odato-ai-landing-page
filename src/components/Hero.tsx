
import { Button } from '@/components/ui/button';
import { ArrowRight, Brain, Zap, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      {/* Multiple layered parallax backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep background layer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * 0.8}px)` }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Mid background layer */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{ transform: `translateY(${scrollY * 0.6}px)` }}
        >
          <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-400/40 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-56 h-56 bg-indigo-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Front background layer */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-300/50 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-300/40 rounded-full blur-xl"></div>
        </div>

        {/* Floating AI elements */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${scrollY * 0.2}px) rotate(${scrollY * 0.05}deg)` }}
        >
          <div className="absolute top-1/4 left-1/6 w-8 h-8 bg-cyan-400 rounded-lg animate-float opacity-70"></div>
          <div className="absolute top-3/4 right-1/6 w-6 h-6 bg-blue-400 rounded-full animate-float opacity-60" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-10 h-10 bg-purple-400 rounded-lg animate-float opacity-50" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Main content with multi-layer parallax */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center">
          {/* Badge with strong parallax */}
          <div 
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-300/30 text-cyan-100 text-sm font-medium mb-8"
            style={{ transform: `translateY(${scrollY * -0.3}px)` }}
          >
            <Brain className="w-5 h-5 mr-3 animate-pulse" />
            <Sparkles className="w-4 h-4 mr-2" />
            Líder en Soluciones de IA Empresarial - Ourense
          </div>

          {/* Main heading with dramatic parallax */}
          <div 
            className="mb-8"
            style={{ transform: `translateY(${scrollY * -0.2}px) scale(${1 + scrollY * 0.0001})` }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              El Futuro es
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse-glow">
                Inteligencia Artificial
              </span>
            </h1>
          </div>

          {/* Subheading with medium parallax */}
          <p 
            className="text-xl md:text-2xl text-cyan-100/90 mb-12 max-w-4xl mx-auto leading-relaxed"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          >
            Transformamos tu negocio con soluciones de IA personalizadas para logística, 
            fabricación, optimización de procesos y generación de leads desde Ourense.
          </p>

          {/* Stats with cascading parallax */}
          <div 
            className="flex flex-wrap justify-center gap-12 mb-16"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <div 
              className="text-center"
              style={{ transform: `translateY(${scrollY * -0.05}px)` }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">50+</div>
              <div className="text-cyan-200/80">Proyectos Exitosos</div>
            </div>
            <div 
              className="text-center"
              style={{ transform: `translateY(${scrollY * -0.07}px)` }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">95%</div>
              <div className="text-cyan-200/80">Mejora en Eficiencia</div>
            </div>
            <div 
              className="text-center"
              style={{ transform: `translateY(${scrollY * -0.09}px)` }}
            >
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-cyan-200/80">Soporte Técnico</div>
            </div>
          </div>

          {/* CTA Buttons with gentle parallax */}
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-5 text-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl border-0 backdrop-blur-sm"
            >
              Solicitar Demo Gratuita
              <ArrowRight className="ml-3 w-6 h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-cyan-400/50 text-cyan-100 hover:bg-cyan-400/10 backdrop-blur-sm px-10 py-5 text-lg font-semibold transition-all duration-500 transform hover:scale-105"
            >
              <Zap className="mr-3 w-6 h-6" />
              Ver Casos de Éxito
            </Button>
          </div>

          {/* Trust indicators with reverse parallax */}
          <div 
            className="mt-20"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            <p className="text-cyan-200/60 text-sm mb-8">Empresas que confían en Odato:</p>
            <div className="flex justify-center items-center space-x-12 opacity-40">
              <div className="bg-gradient-to-r from-cyan-300/30 to-blue-300/30 h-10 w-32 rounded-lg backdrop-blur-sm"></div>
              <div className="bg-gradient-to-r from-blue-300/30 to-purple-300/30 h-10 w-32 rounded-lg backdrop-blur-sm"></div>
              <div className="bg-gradient-to-r from-purple-300/30 to-cyan-300/30 h-10 w-32 rounded-lg backdrop-blur-sm"></div>
              <div className="bg-gradient-to-r from-cyan-300/30 to-blue-300/30 h-10 w-32 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-200/60 animate-bounce"
        style={{ transform: `translateX(-50%) translateY(${scrollY * -0.5}px)` }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
