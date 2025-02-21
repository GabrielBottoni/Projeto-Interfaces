import React from 'react'
import './footer.css'
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
<footer className="mb-0 footer-style">
      <div>
        <p>&copy; {new Date().getFullYear()} - Todos os direitos reservados.</p>
      </div>
      <div>
        <p>
          Desenvolvido por <b>Gabriel Alves Bottoni</b>
        </p>
      </div>
      <div>
        <p>
          <a href="https://github.com/GabrielBottoni" target="_blank"> <FaGithub size={24}/> Github</a> | <a href="https://www.linkedin.com/in/gabrielbottoni" target="_blank"> <FaLinkedin size={24}/> LinkedIn</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
