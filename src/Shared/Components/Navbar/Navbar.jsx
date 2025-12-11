import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.modules.css';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container">
    <a class="navbar-brand" href="#">industry</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link text-uppercase" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-uppercase" aria-current="page" href="#">about</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-uppercase" aria-current="page" href="#">service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-uppercase" aria-current="page" href="#">projects</a>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-uppercase" aria-current="page" to="/comments">comments</Link>
          </li>
          <li class="nav-item">
          <Link class="nav-link text-uppercase" aria-current="page" to="/todos">ToDos</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-uppercase" aria-current="page" to="/users">Users</Link>
        </li>

      </ul>
      
    </div>
  </div>
</nav>
    );
}

export default Navbar;
