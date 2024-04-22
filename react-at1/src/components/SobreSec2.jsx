import '../SobreSec2.css';

function SobreSec2() {
  const handleCadastroClick = () => {
    console.log('Cadastrar');
  };

  return (
    <div>
      <h1 className='Planos'>Planos</h1>
    <div className="cards-containerSobre">
      
      <div className="cardSobre" style={{ backgroundColor: '#fff' }}>
        <div className="card-headerSobre" style={{ backgroundColor: '#6975E8', color: '#000' }}>Individual</div>
        <div className="card-bodySobre">
          <p className='titulo' style={{fontSize:'1rem'}}>1 Usuário
          <div className="dropdown">
            <select>
              <option value="15">10 Vídeos <p>R$15</p></option>
            </select>
          </div>
          </p>
          
          <button className="cadastre-btn" onClick={handleCadastroClick}>Cadastrar</button>
        </div>
      </div>

      <div className="cardSobre" style={{ backgroundColor: '#fff' }}>
        <div className="card-headerSobre" style={{ backgroundColor: '#fff', color: '#000' }}>Profissional - Times</div>
        <div className="card-bodySobre">
          <p className='titulo' style={{fontSize:'1rem'}}>1-10 Usuários
          <div className="dropdown">
            <select>
              <option value="40">Vídeos Ilimitados <p>R$40</p></option>
            </select>
          </div></p>
          
          <p className='titulo' style={{fontSize:'1rem'}}>10+ Usuários
          <div className="dropdown">
            <select>
              <option value="40">Vídeos Ilimitados <p>R$20</p></option>
            </select>
          </div>
          </p>
          
          <button className="cadastre-btn2" onClick={handleCadastroClick}>Cadastrar</button>
        </div>
      </div>

      <div className="cardSobreCorp" style={{ backgroundColor: '#fff' }}>
        <div className="card-headerSobre" style={{ backgroundColor: '#fff', color: '#000' }}>Corporativo</div>  
        <img src="../cell.png" alt="Celular" className='celular'/>
          <button className="cadastre-btn2" onClick={handleCadastroClick}>Entre Em Contato</button>
        </div>
      </div>
      </div>
  );
}

export default SobreSec2;
