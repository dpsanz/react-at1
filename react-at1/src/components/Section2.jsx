import '../Section2.css'

function Section2() {
    return (
      <>
        <div className="card-container">
          <div className="card" style={{ backgroundColor: '#F1C2B0' }}>
            <div className="card-header" style={{ backgroundColor: '#F1C2B0', color: '#ffffff' }}>01</div>
            <img className="card-image" src="../Public/youtube.png" alt="Youtube" />
            <div className="card-body">
              <p className='titulo'>Youtube</p>
              <p>Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.</p>
            </div>
          </div>
  
          <div className="card" style={{ backgroundColor: '#F9EB98' }}>
            <div className="card-header" style={{ backgroundColor: '#F9EB98', color: '#ffffff' }}>02</div>
            <img className="card-image" src="../Public/tiktok.png" alt="Tiktok" />
            <div className="card-body">
              <p className='titulo'>Tiktok</p>
              <p>Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.</p>
            </div>
          </div>
  
          <div className="card" style={{ backgroundColor: '#C0D9DD' }}>
            <div className="card-header" style={{ backgroundColor: '#C0D9DD', color: '#ffffff' }}>03</div>
            <img className="card-image" src="../Public/facebook.png" alt="Facebook" />
            <div className="card-body">
              <p className='titulo'>Facebook</p>
              <p>Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.</p>
            </div>
          </div>
  
          <div className="card" style={{ backgroundColor: '#6975E8' }}>
            <div className="card-header" style={{ backgroundColor: '#6975E8', color: '#ffffff' }}>04</div>
            <img className="card-image" src="../Public/instagram.png" alt="Instagram" />
            <div className="card-body">
              <p className='titulo'>Instagram</p>
              <p>Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.</p>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Section2;