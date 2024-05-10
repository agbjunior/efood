import { Link } from 'react-router-dom'
import faceSrc from '../../../images/facebook.png'
import instaSrc from '../../../images/instagram.png'
import LogoImgHome from '../../../images/logo_NEW.png'
import twSrc from '../../../images/twitter.png'

import { Footers, RedeSociais, SectionFooter, Titulo } from './styles'

const Footer = () => (
  <Footers className="container">
    <div className="container">
      <SectionFooter>
        <Link to="/">
          <img className="imagemLogo" src={LogoImgHome} alt="efood" />
        </Link>
        <RedeSociais>
          <img src={instaSrc} alt="Instagram" />
          <img src={faceSrc} alt="Facebook" />
          <img src={twSrc} alt="Twitter" />
        </RedeSociais>
      </SectionFooter>
      <Titulo>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Titulo>
    </div>
  </Footers>
)
export default Footer
