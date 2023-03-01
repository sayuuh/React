import React from 'react'

const Footer = () => {
    const now = new Date()
  return (
    <footer>
        <p>@{now.getFullYear()} Quattro - Todos os direitos reservaods.</p>
    </footer>
  )
}

export default Footer