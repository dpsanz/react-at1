import '../Section1.css'

function Section1() {

  const handleContatoClick = () => {
    window.location.href = '/contato';
  };
return (
    <>
    <section>
      <div className="conteudo">
        <div className="texto">
          <h2>Crie seus vídeos online</h2>
          <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.
          </p>
          <button className='but1' onClick={handleContatoClick}>Começar Agora!</button>
        </div>
        <div className="imagem">
          <img src="../Public/Hero image.png" alt="Descrição da imagem" />
        </div>
      </div>
    </section>
    </>
  );
}

export default Section1;