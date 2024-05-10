import ProductList from '../../../assets/components/Body/ProductList'
import Banner from '../../../assets/components/Body/Header/Banner'
import Header from '../../../assets/components/Body/Header/Home'

import ImagePizza from '../../../assets/images/pizza.png'

import Efood from '../../../models'

const ListaRestaurantMenu: Efood[] = [
  {
    id: 1,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImagePizza
  },
  {
    id: 2,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImagePizza
  },
  {
    id: 3,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImagePizza
  },
  {
    id: 4,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImagePizza
  },
  {
    id: 5,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImagePizza
  },
  {
    id: 6,
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    infos: [''],
    nota: '',
    image: ImagePizza
  }
]

const Second = () => (
  <>
    <Header background={'dark'} />
    <Banner />
    <ProductList title="" background={'dark'} efoods={ListaRestaurantMenu} />
  </>
)
export default Second
