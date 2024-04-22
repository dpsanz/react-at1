import '../SobreSec1.css';

function SobreSec1() {
  const handleContatoClick = () => {
    window.location.href = '/contato';
  };

  return (
    <section className="sobre-sec1-container">
      <div className="conteudo">
        <div className="texto">
          <h2>Bem-vindo à revolução dos vídeos!</h2>
          <p>Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.</p>
          <button className='but1' onClick={handleContatoClick}>Baixe o app</button>
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
