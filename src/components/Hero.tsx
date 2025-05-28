
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

  // Responsive parallax multipliers
  const getParallaxMultiplier = (base: number) => {
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768 ? base * 0.3 : base;
    }
    return base;
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950">
      {/* Simplified parallax backgrounds */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep background layer */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{ transform: `translateY(${scrollY * getParallaxMultiplier(0.2)}px)` }}
        >
          <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
        </div>

        {/* Mid background layer */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{ transform: `translateY(${scrollY * getParallaxMultiplier(0.15)}px)` }}
        >
          <div className="absolute top-40 right-20 w-48 h-48 bg-cyan-400/40 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-56 h-56 bg-indigo-400/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Front background layer */}
        <div 
          className="absolute inset-0 opacity-60"
          style={{ transform: `translateY(${scrollY * getParallaxMultiplier(0.1)}px)` }}
        >
          <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-300/50 rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-purple-300/40 rounded-full blur-xl"></div>
        </div>

        {/* Simplified floating AI elements */}
        <div 
          className="absolute inset-0 hidden md:block"
          style={{ transform: `translateY(${scrollY * getParallaxMultiplier(0.05)}px)` }}
        >
          <div className="absolute top-1/4 left-1/6 w-8 h-8 bg-cyan-400/70 rounded-lg animate-float"></div>
          <div className="absolute top-3/4 right-1/6 w-6 h-6 bg-blue-400/60 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1/2 left-3/4 w-10 h-10 bg-purple-400/50 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Main content with controlled parallax */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="text-center">
          {/* Badge with subtle parallax */}
          <div 
            className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-300/30 text-cyan-100 text-xs sm:text-sm font-medium mb-6 sm:mb-8"
            style={{ transform: `translateY(${scrollY * getParallaxMultiplier(-0.05)}px)` }}
          >
            <Brain className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 animate-pulse" />
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
            <span className="hidden sm:inline">Líder en Soluciones de IA Empresarial - Ourense</span>
            <span className="sm:hidden">IA Empresarial - Ourense</span>
          </div>

          {/* Main heading with gentle parallax */}
          <div 
            className="mb-6 sm:mb-8"
            style={{ transform: `translateY(${scrollY * getParallaxMultiplier(-0.03)}px)` }}
          >
            <h1 className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
              El Futuro es
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Inteligencia Artificial
              </span>
            </h1>
          </div>

          {/* Subheading with minimal parallax */}
          <p 
            className="text-lg sm:text-xl md:text-2xl text-cyan-100/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ transform: `translateY(${scrollY * getParallaxMultiplier(-0.02)}px)` }}
          >
            Transformamos tu negocio con soluciones de IA personalizadas para logística, 
            fabricación, optimización de procesos y generación de leads desde Ourense.
          </p>

          {/* Stats with responsive layout */}
          <div 
            className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-12 mb-12 sm:mb-16"
            style={{ transform: `translateY(${scrollY * getParallaxMultiplier(-0.01)}px)` }}
          >
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">50+</div>
              <div className="text-sm sm:text-base text-cyan-200/80">Proyectos Exitosos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">95%</div>
              <div className="text-sm sm:text-base text-cyan-200/80">Mejora en Eficiencia</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">24/7</div>
              <div className="text-sm sm:text-base text-cyan-200/80">Soporte Técnico</div>
            </div>
          </div>

          {/* CTA Buttons responsive */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105 border-0 backdrop-blur-sm"
            >
              <span className="hidden sm:inline">Solicitar Demo Gratuita</span>
              <span className="sm:hidden">Demo Gratuita</span>
              <ArrowRight className="ml-2 sm:ml-3 w-5 h-5 sm:w-6 sm:h-6" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-cyan-400/50 text-cyan-100 hover:bg-cyan-400/10 backdrop-blur-sm px-6 sm:px-10 py-4 sm:py-5 text-base sm:text-lg font-semibold transition-all duration-300 hover:scale-105"
            >
              <Zap className="mr-2 sm:mr-3 w-5 h-5 sm:w-6 sm:h-6" />
              <span className="hidden sm:inline">Ver Casos de Éxito</span>
              <span className="sm:hidden">Casos de Éxito</span>
            </Button>
          </div>

          {/* Trust indicators - hidden on mobile */}
          <div className="mt-12 sm:mt-20 hidden sm:block">
            <p className="text-cyan-200/60 text-sm mb-6 sm:mb-8">Empresas que confían en Odato:</p>
            <div className="flex justify-center items-center space-x-8 sm:space-x-12 opacity-40">
              <div className="bg-gradient-to-r from-cyan-300/30 to-blue-300/30 h-8 w-24 sm:h-10 sm:w-32 rounded-lg backdrop-blur-sm"></div>
              <div className="bg-gradient-to-r from-blue-300/30 to-purple-300/30 h-8 w-24 sm:h-10 sm:w-32 rounded-lg backdrop-blur-sm"></div>
              <div className="bg-gradient-to-r from-purple-300/30 to-cyan-300/30 h-8 w-24 sm:h-10 sm:w-32 rounded-lg backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-200/60 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
