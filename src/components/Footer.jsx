import React from 'react';
import whatsapp from '../assets/icons/whatsapp.png';
import facebook from '../assets/icons/facebook.png';
import x from '../assets/icons/x.png';
import linkedin from '../assets/icons/linkedin.png';
import instagram from '../assets/icons/instagram.png';


const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary text-white">
      <div className="max-w-[1100px] mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre Nosotras</h3>
            <p className="text-white text-sm">
              <span className='font-semibold'>TallerPR</span> specializes in custom products made from metal, wood, PVC, and resin using advanced techniques like CNC and 3D printing. We create solutions for home decor and business needs.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2 text-white text-sm">
              <li>Servicio 01</li>
              <li>Servicio 02</li>
              <li>Servicio 03</li>
              <li>Servicio 04</li>
              <li>Servicio 05</li>
              <li>Servicio 06</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2 text-white text-sm">
              <li>Servicios</li>
              <li>Preguntas Frecuentes</li>
              <li>Testimonios</li>
              <li>Nuestro Equipo</li>
              <li>Política De Privacidad</li>
              <li>Términos Y Condiciones</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contacta con <br />nosotros</h3>
            <ul className="space-y-2 text-white text-sm">
              <li>Formulario de consulta</li>
              <li>soporte@tallerpr.com</li>
              <li>+1 787 500 0051</li>
              <li>www.tallerpr.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white">
        <div className="max-w-[1100px] mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white mb-4 sm:mb-0">
            Copyright © {currentYear} TallerPR
          </p>
          
          <div className="flex space-x-4">
            <img src={whatsapp} className="w-5 h-5 text-white hover:text-white cursor-pointer" />
            <img src={facebook} className="w-5 h-5 text-white hover:text-white cursor-pointer" />
            <img src={instagram} className="w-5 h-5 text-white hover:text-white cursor-pointer" />
            <img src={x} className="w-5 h-5 text-white hover:text-white cursor-pointer" />
            <img src={linkedin} className="w-5 h-5 text-white hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;