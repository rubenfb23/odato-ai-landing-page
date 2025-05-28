
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Factory, BarChart3, Users, Bot, Cog } from 'lucide-react';

const Services = () => {
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
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios de
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"> IA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluciones integrales de Inteligencia Artificial diseñadas para transformar cada área de tu negocio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-gray-500 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">¿No encuentras lo que necesitas?</p>
          <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Consultoría Personalizada
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
