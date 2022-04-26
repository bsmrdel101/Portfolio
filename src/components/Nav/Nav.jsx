import './Nav.css';

function Nav() {
    const getOffset = (el) => {
        const rect = el.getBoundingClientRect();
        return {
          left: rect.left + window.scrollX,
          top: rect.top + window.scrollY
        };
    }

    const scrollToElement = (element) => {
        switch (element) {
            case 'about':
                const about = getOffset(document.getElementById('about')).top;
                window.scrollTo(0, about - 65);
                break;
            default:
                break;
        }
    }
    
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top" id="navbar">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" onClick={() => scrollToElement('about')}>About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Portfolio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
