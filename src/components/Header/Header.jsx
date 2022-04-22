import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
    return (
      <div>
          <Nav />
          {/* Header content */}
          <center>
            <h1>Bennett Smrdel</h1>
            <h3>Full Stack Developer</h3>
          </center>
      </div>
    );
}

export default Header;
