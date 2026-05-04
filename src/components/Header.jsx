import { useEffect, useState } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [active, setActive] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    setActive(targetId);
    if(targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if(targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="navbar" style={isSticky ? { background: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', position: 'fixed' } : { background: 'transparent', boxShadow: 'none', position: 'absolute' }}>
      <div className="container nav-container">
        <div className="logo">
          <div className="logo-box">MB</div>
        </div>
        <nav className="nav-links">
          {['#home', '#fleet', '#testimonials', '#contact'].map((link) => (
            <a 
              key={link} 
              href={link} 
              className={active === link ? 'active' : ''} 
              onClick={(e) => handleClick(e, link)}
            >
              {link.replace('#', '').charAt(0).toUpperCase() + link.slice(2)}
            </a>
          ))}
        </nav>
        <a href="#contact" className="btn btn-primary" onClick={(e) => handleClick(e, '#contact')}>Rent a Car</a>
      </div>
    </header>
  );
};

export default Header;
