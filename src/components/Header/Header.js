import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const links = document.querySelectorAll('.nav-link');
    const handleClick = (event) => {
      links.forEach((link) => link.classList.remove('active'));
      event.target.classList.add('active');
    };
    
    links.forEach((link) => {
      link.addEventListener('click', handleClick);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand m-3" href="#"><b className="m-3">INSURE.</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Personal Plans</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Business Plans</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Guide</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
