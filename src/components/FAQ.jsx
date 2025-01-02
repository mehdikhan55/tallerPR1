import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

const FAQ = ({alignLeft=false}) => {
  const [openIndex, setOpenIndex] = useState(0);



  return (
    <div className="px-8 py-16">
      <div className={`${!alignLeft && "text-center" } mb-12`}>
        <h2 className="main-heading">Preguntas Frecuentes</h2>
        <p className="sub-heading">Respuestas a tus preguntas frecuentes</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-primary/90 rounded-lg overflow-hidden"
          >
            <button
              className="w-full p-4 flex justify-between items-center text-left text-secondary hover:text-primary"
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <span className="font-medium">{faq.question}</span>
              <span className='bg-secondary rounded-full p-1/2 text-white'>
                {openIndex === index ?
                  <X className="w-5 h-5 " /> :
                  <Plus className="w-5 h-5" />
                }
              </span>
            </button>

            {openIndex === index && (
              <div className="p-4 pt-0 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;

const faqs = [
  {
    question: '01. Lorem Ipsum es simplemente el?',
    answer: 'Lorem ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem ipsum ha sido el texto.'
  },
  {
    question: '02. Texto de relleno de las imprentas y?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  },
  {
    question: '03. Lorem Ipsum ha sido el texto de?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  },
  {
    question: '04. Relleno estándar de las industrias desde el año?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  },
  {
    question: '05. Cuando un impresor (anónimo) usó una?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  },
  {
    question: '06. Manera que logró fabricar un libro?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  },
  {
    question: '07. No sólo sobrevivió cinco siglos?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  },
  {
    question: '08. Sino que también ingresó a la?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  },
  {
    question: '09. Se popularizó en la década de 1960?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  },
  {
    question: '10. Con el uso de software de autoedición?',
    answer: 'Lorem ipsum es simplemente el texto de relleno...'
  }
];