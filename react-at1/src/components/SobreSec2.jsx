import '../SobreSec2.css';

function SobreSec2() {
  const handleCadastroClick = () => {
    console.log('Cadastrar');
  };

  return (
    <div className="cards-container">
      <div className="card" style={{ backgroundColor: '#fff' }}>
        <div className="card-header" style={{ backgroundColor: '#6975E8', color: '#000' }}>Individual</div>
        <div className="card-body">
          <p className='titulo' style={{fontSize:'1rem'}}>1 Usuário</p>
          <div className="dropdown">
            <select>
              <option value="15">10 Vídeos (R$15)</option>
            </select>
          </div>
          <button className="cadastre-btn" onClick={handleCadastroClick}>Cadastrar</button>
        </div>
      </div>

      <div className="card" style={{ backgroundColor: '#fff' }}>
        <div className="card-header" style={{ backgroundColor: '#fff', color: '#000' }}>Profissional - Times</div>
        <div className="card-body">
          <p className='titulo' style={{fontSize:'1rem'}}>1-10 Usuários</p>
          <div className="dropdown">
            <select>
              <option value="40">Vídeos Ilimitados (R$40)</option>
            </select>
          </div>
          <p className='titulo' style={{fontSize:'1rem'}}>10+ Usuários</p>
          <div className="dropdown">
            <select>
              <option value="40">Vídeos Ilimitados (R$40)</option>
            </select>
          </div>
          <button className="cadastre-btn2" onClick={handleCadastroClick}>Cadastrar</button>
        </div>
      </div>

      <div className="card" style={{ backgroundColor: '#fff' }}>
        <div className="card-header" style={{ backgroundColor: '#fff', color: '#000' }}>Corporativo</div>  
        <img src="../cell.png" alt="Celular" className='celular'/>
          <button className="cadastre-btn2" onClick={handleCadastroClick}>Entre Em Contato</button>
        </div>
      </div>
  );
}

export default SobreSec2;
