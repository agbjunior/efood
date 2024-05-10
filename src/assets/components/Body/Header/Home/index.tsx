import { Link, useLocation } from 'react-router-dom'

import {
  Carrinho,
  ContainerHeader,
  HeaderHero,
  Imagem,
  Nome,
  Title
} from './styles'

import BannerHome from '../../../../images/BannerImgHome.png'
import LogoHome from '../../../../images/logo_NEW.png'

export type Props = {
  background: 'light' | 'dark'
}

const Header = ({ background }: Props) => {
  const location = useLocation()
  const titleText =
    location.pathname === '/Perfil'
      ? ''
      : 'Viva experiências gastronômicas no conforto da sua casa'
  const titleRestaurate = location.pathname === '/Perfil' ? 'Restaurantes' : ''
  const titleCarrinho =
    location.pathname === '/Perfil' ? '0 produto(s) no carrinho' : ''

  return (
    <HeaderHero className="container">
      <Imagem
        style={{ backgroundImage: `url(${BannerHome})` }}
        background={background}
      >
        <div className="container">
          <ContainerHeader>
            <Nome>{titleRestaurate}</Nome>
            <Link to="/">
              <img className="imagemLogoLnk" src={LogoHome} alt="efood" />
            </Link>
            <Carrinho>{titleCarrinho}</Carrinho>
          </ContainerHeader>
          <Title>{titleText}</Title>
        </div>
      </Imagem>
    </HeaderHero>
  )
}
export default Header
