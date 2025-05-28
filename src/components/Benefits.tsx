
import { Shield, Clock, TrendingUp, Headphones } from 'lucide-react';

const Benefits = () => {
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
    <section className="py-20 bg-gradient-to-r from-primary-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir
            <span className="bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent"> Odato?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Más que un proveedor, somos tu socio estratégico en la transformación digital con IA
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="mx-auto w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                
                <div className="mb-4">
                  <div className="text-3xl font-bold text-primary-600 mb-1">{benefit.stat}</div>
                  <div className="text-sm text-gray-500">{benefit.statLabel}</div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Comenzemos tu transformación digital
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Agenda una consulta gratuita con nuestros expertos en IA y descubre cómo podemos impulsar tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Agendar Consulta Gratuita
              </button>
              <button className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold transition-all duration-300">
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
