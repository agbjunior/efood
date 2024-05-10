import { BannerImagem } from './styles'

import imagemDobanner from '../../../../images/heroImgPerfil.png'

const Banner = () => (
  <div className="container">
    <BannerImagem style={{ backgroundImage: `url(${imagemDobanner})` }}>
      <h3>Italiana</h3>
      <h1>La Dolce Vita Trattoria</h1>
    </BannerImagem>
  </div>
)
export default Banner
