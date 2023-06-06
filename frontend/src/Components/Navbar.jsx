import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <div className='logo'>
            <img src="https://www.thefishguy.co.za/wp-content/uploads/2022/10/Fish-Guy-Logo.png" width={60}></img>
          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={'/Home'} className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/About'} className="nav-link" href="#">About</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Media'} className="nav-link" href="#">Media</Link>
              </li>
              <li className="nav-item">
                <Link to={'/Fishman'} className="nav-link" href="#">Fishman</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
              </li>
              {/* <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li> */}
            </ul>
            <div className='button_card'>
            <button type="button" class="btn btn-dark position-relative">
              Inbox
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                80+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            </div>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar