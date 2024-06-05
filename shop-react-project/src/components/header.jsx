import React from 'react'
import './header.css'

function header() {
  // const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
<nav className="navbar">
      <div className="navbar-logo">LOGO</div>
      <ul className="navbar-menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Product</a></li>
        <li><a href="#">For sellers</a></li>
        <li><a href="#">Contact</a></li>
        <li><button className="sign-in-btn">Sign In</button></li>
        <li><button className="log-in-btn">Log In</button></li>
      </ul>
    </nav>

//     // <nav className="navbar">
//     //  <div className="navbar-logo">LOGO Soon</div>
//     //  <ul className="navbar-menu"></ul>
//     //  <li><a href="#">Home</a></li>
//     //  <li className="dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}><a href="#">Product</a>
   
//     //  {dropdownOpen && (
//     //           <ul className="dropdown-menu">
//     //             <li><a href="#">Category 1</a></li>
//     //             <li><a href="#">Category 2</a></li>
//     //             <li><a href="#">Category 3</a></li>
//     //           </ul>
//     //         )}
     
//     //  </li>
//     //  <li><a href="#">For sellers</a></li>
//     //  <li><a href="#">Contact</a></li>
//     //  <li><button className="sign-in-btn">Sign In</button></li>
//     //  <li><button className="log-in-btn">Log In</button></li>
//     // </nav>
  );
}

export default header
