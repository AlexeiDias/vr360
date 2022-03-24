import React from 'react'
import bootstrap from 'bootstrap'


const Nav = () => {
  return (
    <ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Início</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Anunciantes</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Contato</a>
  </li>
  <li class="nav-item">
    <a class="nav-link ">Sobre</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Login</a>
  </li>
</ul>
  )
}

export default Nav