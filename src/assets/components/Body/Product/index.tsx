import {
  CardConteiner,
  CardRestaurant,
  ContainerDescritivo,
  Imagem,
  Infos,
  LineSection,
  RatingStar
} from './styles'

import { Link, useLocation } from 'react-router-dom'
import Satisfacao from '../../../images/estrela.png'
import Tag from '../Tag'

type Props = {
  title: string
  description: string
  infos: string[]
  nota: string
  image: string
  background: 'light' | 'dark'
}

const Product = ({
  title,
  description,
  infos,
  nota,
  image,
  background
}: Props) => {
  const location = useLocation()
  const botaoTexto =
    location.pathname === '/Perfil' ? 'Adicionar ao carrinho' : 'Saiba mais'

  return (
    <div className="container">
      <CardConteiner>
        <CardRestaurant>
          <Imagem style={{ backgroundImage: `url(${image})` }} />
          <Infos>
            {infos.map((infos) => (
              <Tag key={infos}>{infos}</Tag>
            ))}
          </Infos>
          <ContainerDescritivo>
            <LineSection>
              <h3 className="tituloCard">{title}</h3>
              <div className="Rating">
                <h3 className="nota">{nota}</h3>
                <RatingStar
                  style={{ backgroundImage: `url(${Satisfacao})` }}
                />
              </div>
            </LineSection>
            <p>{description}</p>
            <Link to="/Perfil">
              <Tag size="big">{botaoTexto}</Tag>
            </Link>
          </ContainerDescritivo>
        </CardRestaurant>
      </CardConteiner>
    </div>
  )
}

export default Product
