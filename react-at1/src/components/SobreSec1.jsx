import React from 'react';
import '../SobreSec1.css'; // Importe o arquivo CSS aqui

function SobreSec1() {
  const handleContatoClick = () => {
    window.location.href = '/contato';
  };

  return (
    <section className="sobre-sec1-container">
      <div className="conteudo">
        <div className="texto">
          <h2>Crie seus vídeos online</h2>
          <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
          <button className='but1' onClick={handleContatoClick}>Começar Agora!</button>
        </div>
        <div className="imagens">
          <img src="../Public/flor.png" alt="Flor" />
          <img src="../Public/escudo.png" alt="Escudo" />
        </div>
      </div>
    </section>
  );
}

export default SobreSec1;
