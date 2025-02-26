import { BrowserRouter } from 'react-router-dom'
import Footer from './assets/components/Body/Footer'
import Rotas from './routes'
import { GlobalCSS } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalCSS />
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
