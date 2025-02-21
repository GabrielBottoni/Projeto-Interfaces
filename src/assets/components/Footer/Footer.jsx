import React from 'react'
import './footer.css'

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
          <a href="#">Github</a> | <a href="#">LinkedIn</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
