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
          <h2>AT1-REACT</h2>
          <p>Feito por Daniel, Reimar e Tadashi, este site possui o drip. Um exemplo disso é essa imagem ao lado:
          </p>
          <button className='but1' onClick={handleContatoClick}>Contato</button>
        </div>
        <div className="imagem">
          <img src="../Public/ban.jpg" alt="Descrição da imagem" />
        </div>
      </div>
    </section>
    </>
  );
}

export default Section1;