import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className='container-um'>
                <img src="farmarcia-logo-pq.PNG (1).png" alt="logo" />
                <h3>Contatos</h3>
                <div className='line'></div>

                <p>(31) 99876-5432 <br />
                    OncoMed@gmail.com</p>

                <h3>WhatsApp</h3>
                <div className='line'></div>
                <p>(31) 99876-5432</p>

            </div>

            <div className='container-dois'>

                <h3>Menú do site</h3>
                <div className='line'></div>
                <ul>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">Estoque</a></li>
                </ul>

                <a href="">Termos de uso</a> <br />
                <a href="">Politica de privacidade</a>

            </div>

            <div className='container-tres'>
                <h3>Endereço</h3>
                <div className='line'></div>
                <p>Farmárcia <br /> Rua das Palmeiras, 789 <br /> Bairro Coqueiros <br /> Florianópolis, SC, 88060-123</p>

                <p>Aviso: As informações da farmacia Farmárcia são fictícias e para fins de exemplo.</p>
            </div>
        </div>
    )
}

export default Footer
