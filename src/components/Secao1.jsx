import { useState } from 'react';
import logo from '../assets/img/logo.png'; // Substitua pelo caminho correto do logo
import backgroundImage from '../assets/img/Lapis.svg'; // Substitua pelo caminho correto da imagem de fundo
import imgmenina from '../assets/img/menina.png'

function Secao1() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Função para rolar suavemente até o questionário
  const scrollToQuestionario = () => {
    // Define a âncora na URL
    window.location.hash = '#questionario';
  
    // Remove os dados do localStorage
    localStorage.removeItem('valorMatEsc');
    localStorage.removeItem('descontoVista');
    localStorage.removeItem('jurosMensal');
    localStorage.removeItem('parcelas');
  
    // Recarrega a página
    window.location.reload();
  };
  
  
// Função para rolar até uma seção específica
const scrollToSection = (sectionId) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <section
      className="relative pt-8 px-6 bg-cover bg-bottom bg-no-repeat  text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "100%" }}
    >
      <div className='flex justify-center gap-8' >
        <div className='hidden lg:block'> 
          <img width="648" heigth="816" src={imgmenina}  />
        </div>
        <div className='mb-28 lg:mb-12 mt-9 '>
          <h1 className='text-black text-4xl sm:text-5xl leading-snug sm:leading-tight font-bold mb-5 max-w-md'>Simulador de Comparativo para Material Escolar</h1> 
          <p className='text-[#6667ab] text-xl sm:text-2xl mb-10 sm:mb-14 max-w-md'>Insira os dados necessários e veja os resultados detalhados do cálculo.</p> 
           {/* Botões Informativos */}
          <div className="flex flex-col md:flex-row gap-3 md:gap-6 mt-6 flex-wrap ">
            {/* Botão 1: O que é material escolar */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="rounded-lg text-sm md:text-base px-4 py-2 w-full md:w-auto bg-[#2d2978]"
            >
              O que é o material escolar?
            </button>
            {/* Botão 2: Simule Agora */}
            <button
              onClick={scrollToQuestionario}
              className="rounded-lg text-sm md:text-base px-4 py-2 w-full md:w-auto bg-[#2d2978]"
            >
              Simular Agora
            </button>
            {/* Botão 3: Como Calcular o seu material escolar */}
            <button
              onClick={() => scrollToSection('entendamais')}
              className="rounded-lg text-sm md:text-base px-4 py-2 w-full md:w-auto bg-[#2d2978]"
            >
              Como Pagar o seu material escolar
            </button>
          </div>
        </div>
      </div>
      {/* Modal Explicativo */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 px-4">
          <div className="bg-white text-black rounded-lg p-6 max-w-lg w-full relative">
            <h2 className="text-xl font-bold mb-4">O que é material escolar?</h2>
            <p className="text-sm mb-4">
            No início de cada ano, as famílias enfrentam a necessidade de adquirir materiais escolares para seus filhos, o que pode representar um grande gasto. A compra de itens essenciais como cadernos, mochilas, lápis, canetas e outros materiais necessários para o bom desempenho na escola, muitas vezes é uma das maiores despesas de início de ano. Diante disso, a organização financeira e a pesquisa de preços se tornam fundamentais para que as famílias consigam equilibrar o orçamento sem comprometer outras necessidades.</p>
            <a
              href="https://dsop.com.br/como-economizar-material-escolar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Saiba mais sobre Material Escolar
            </a>
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Secao1;
