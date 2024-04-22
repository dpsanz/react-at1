import '../SobreSec1.css';

function CardsContainer() {
  const handleCadastroClick = () => {
    console.log('Cadastrar');
  };

  const handleContatoClick = () => {
    console.log('Entre em Contato');
  };

  return (
    <div className="cards-container">
      <div className="card card-individual">
        <div className="card-header">#6975E8</div>
        <div className="card-body">
          <h2>Individual</h2>
          <p>1 Usuário</p>
          <div className="dropdown">
            <select>
              <option value="15">10 Vídeos (R$15)</option>
              {/* Outras opções de vídeos aqui */}
            </select>
          </div>
          <button className="cadastre-btn" onClick={handleCadastroClick}>Cadastrar</button>
        </div>
      </div>

      <div className="card card-profissional">
        <div className="card-header">Profissional - Times</div>
        <div className="card-body">
          <h2>Profissional - Times</h2>
          <p>1-10 Usuários</p>
          <div className="dropdown">
            <select>
              <option value="40">Vídeos Ilimitados (R$40)</option>
              <option value="20">10+ Usuários, Vídeos Ilimitados (R$20)</option>
              {/* Outras opções de planos aqui */}
            </select>
          </div>
          <button className="cadastre-btn" onClick={handleCadastroClick}>Cadastrar</button>
        </div>
      </div>

      <div className="card card-corporativo">
        <div className="card-header">SobreSection2</div>
        <div className="card-body">
          <h2>Corporativo</h2>
          <p>Entre em Contato</p>
          <button className="contato-btn" onClick={handleContatoClick}>Entre em Contato</button>
        </div>
      </div>
    </div>
  );
}

export default CardsContainer;

