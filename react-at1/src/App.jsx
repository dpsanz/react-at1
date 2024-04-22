import Navbar from './components/Navbar';
import Section1 from './components/Section1';
import Sobre from './pages/Sobre.jsx';
import Contato from './pages/Contato.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Section1 />
      {window.location.pathname === './pages/Sobre.jsx' && <Sobre />}
      {window.location.pathname === '/contato' && <Contato />}
    </>
  );
}

export default App;