'use client'
import { useState } from 'react';

const SidebarApp = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className='sidebar'>
      <img onClick={toggleSidebar} src="../sidebar-icon.png" />
      {/* Overlay para fechar ao clicar fora */}
      {isOpen && (
        <div className="fundo" onClick={toggleSidebar}/>
      )}

      {/* Sidebar Container */}
      <div className={`frente transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } transition-transform duration-300 ease-in-out`}>
        <div className="cabecalho">
            <button onClick={toggleSidebar}>X</button>
            <img src="../agtaju.png" alt="Distintivo Agentes de Trânsito" />
            <span>Agente de Trânsito de Aracaju</span>
        </div>
        <nav className="conteudo">
          <a href="#">Legislações dos Agentes</a>
          <a href="#">Legislações de Trânsito</a>
          <a href="/acidente">Registro de Acidente</a>
        </nav>
      </div>
    </div>
  );
};

export default SidebarApp;