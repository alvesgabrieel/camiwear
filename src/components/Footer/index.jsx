import { BsInstagram } from 'react-icons/bs'

import * as S from './styles'

const Footer = () => {
    return (
        <>
            <S.FooterContent className='container'>
                <S.Footer>
                    <div>
                        <h4>Institucional</h4>
                        <p>Sobre a loja</p>
                    </div>
                    <div>
                        <h4>Politicas</h4>
                        <p>termos e condições</p>
                        <p>politica de privacidade</p>
                        <p>política de troca e devoluções</p>
                        <p>política de entrega</p>
                    </div>
                    <div>
                        <h4>conta</h4>
                        <p>Lista de Pedidos</p>
                    </div>
                    <div>
                        <h4>SAC</h4>
                        <p>duvidas frequentes</p>
                        <p>fale conosco</p>
                        <p>horário de atendimento:
                        dias úteis de 9 às 18h</p>
                        <h4>Redes sociais</h4>
                        <a href="https://www.instagram.com/camiwear_/" target='_blank' rel="noreferrer">
                            <BsInstagram />
                        </a>
                        
                    </div>
                </S.Footer>
            </S.FooterContent>
        </>
    )
}

export default Footer