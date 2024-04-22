import '../Navbar.css'

function Navbar() {
  const handleNavigate = (route) => {
    window.location.href = route;
  };

return (
    <header>
         <a onClick={() => handleNavigate('/')}>Home</a>
         <a onClick={() => handleNavigate('../pages/Sobre.jsx')}>Sobre</a>
         <a onClick={() => handleNavigate('../pages/Contato.jsx')}>Contato</a>
    </header>
  );
}

export default Navbar;