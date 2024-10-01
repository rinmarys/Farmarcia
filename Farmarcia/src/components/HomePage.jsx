import React from 'react'
import './HomePage.css'
import Carrossel from './Carrossel'
import Footer from './Footer'

function HomePage() {
    return (
        <div className='body-homePage'>
            <div className='body-ladingPage'>
                <div className='texto-ladingPage'>

                    <h1>Bem-vindo à nova era da nossa farmácia!</h1>
                    <div className='line'></div>
                    <p>Após uma renovação completa, estamos prontos para cuidar de você como nunca antes.
                        Nossa missão é trazer saúde e bem-estar à sua comunidade com carinho e dedicação.</p>

                    <div className='button-alinhamento-ladingPage'>
                        <button className='button-cadastrar'>Cadastrar-se</button>
                        <button className='button-login'>Login</button>
                    </div>

                </div>

                <div className='img-ladingPage'>
                    <img src="LadingPageIMG.svg" alt="Cuidado" />
                </div>

            </div>

            <div className='body-secaoFestiva'>

                <div className='carrossel-alinhamento'>
                    <Carrossel />
                </div>

                <div className='texto-secaoFestiva'>
                    <h1>Você é o nosso convidado especial!</h1>

                    <div className='line'></div>

                    <p>Junte-se a nós para a grande inauguração no dia 10 de novembro às 2 p.m!
                        Teremos muitas surpresas, brindes e promoções incríveis. Não fique de fora!</p>
                </div>
            </div>

            <div>
                <Footer />
            </div>
        </div>
    )
}

export default HomePage
