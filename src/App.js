import React from "react";


function App() {
  return (
    <div>
      <Navbar>
        
      </Navbar>
    </div>
  );
}

function Navbar({children}){
  return(
    <nav className='navbar'>
      <ul className='navbar-nav'>
        {children}
      </ul>
    </nav>
  )
}

function NavItem({children}){
  return(
    <li className='nav-item'>
      <a href='#'>
        {children}
      </a>
    </li>
  )
}

export default App;
