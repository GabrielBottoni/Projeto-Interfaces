import React from 'react'

function Footer() {
  return (
<footer className={'fixed-bottom'} style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center' }}>
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
          <a href="#">Sobre nós</a> | <a href="#">Contato</a> | <a href="#">Política de Privacidade</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
