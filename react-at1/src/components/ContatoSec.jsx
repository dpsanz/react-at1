import '../Ctt.css';

function ContatoSec() {
    return (
      <div className="contato-container">
        <div className="info-container">
          <div className="info-text">
            <h2>Dúvidas e suporte, entre em contato:</h2>
          </div>
          <div className="info-images">
            <img src="../Public/twitter.png" alt="Imagem 1" />
            <img src="../Public/1instagram.png" alt="Imagem 2" />
            <img src="../Public/discord.png" alt="Imagem 3" />
          </div>
        </div>
        <div className="divider"></div> 
        <div className="form-container">
          <form className="contato-form">
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Mensagem"></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default ContatoSec;