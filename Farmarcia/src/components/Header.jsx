import React from 'react'
import './Header.css'

function Header() {
    return (
        <div className='alinhamento-navbar'>
            <nav className='nav-bar'>

                <a href="">Produtos</a>
                <a href="">Serviços</a>
                <a href="">Blog</a>
                <a href="">Sobre nós</a>

                <button className='button-cadastrar'>Cadastrar-se</button>
                <button className='button-login'>Login</button>

            </nav>
        </div>
    )
}

export default Header
