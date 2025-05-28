
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-500 bg-clip-text text-transparent">
                Odato
              </div>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transformamos empresas con soluciones de Inteligencia Artificial innovadoras y personalizadas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Logística Inteligente</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Fabricación 4.0</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Optimización de Procesos</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Generación de Leads</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Automatización RPA</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Consultoría IA</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Empresa</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Sobre Nosotros</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Casos de Éxito</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Carreras</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary-400 transition-colors duration-200">Prensa</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail size={16} className="text-primary-400 mr-3" />
                <span className="text-gray-300">contacto@odato.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-primary-400 mr-3" />
                <span className="text-gray-300">+34 900 123 456</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="text-primary-400 mr-3 mt-1" />
                <span className="text-gray-300">
                  Paseo de la Castellana, 123<br />
                  28046 Madrid, España
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Odato. Todos los derechos reservados.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
