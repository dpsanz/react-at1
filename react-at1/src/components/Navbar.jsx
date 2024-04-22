import '../Navbar.css'
import{Link} from 'react-router-dom'


function Navbar() {

return (
    <header>
         <Link to="/">Home</Link>
         <Link to="/Sobre">Sobre</Link>
         <Link to="/Contato">Contato</Link>
    </header>
  );
}

export default Navbar;