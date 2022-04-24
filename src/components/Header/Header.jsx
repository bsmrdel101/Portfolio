import Nav from '../Nav/Nav';
import './Header.css';

function Header() {
    return (
        <div>
            <Nav />
            {/* Header content */}
            <center>
                <header className='header-container'>
                    <div className='header-text'>
                        <h1>Bennett Smrdel</h1>
                        <h3>Full Stack Developer</h3>
                    </div>
                </header>
            </center>
        </div>
    );
}

export default Header;
