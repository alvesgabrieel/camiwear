import { BrowserRouter } from 'react-router-dom'
import { register } from 'swiper/element/bundle'
register()
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import GlobalStyle from './styles';
import Rotas from './routes'

function App() {

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Rotas />
    </BrowserRouter>
  );
}

export default App;
