
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import AllDatacontext from './Context/AllDatacontext.jsx'
import BasketLocalstorge from './Context/BasketLocalstorge.jsx'

createRoot(document.getElementById('root')).render(
  <BasketLocalstorge>
    <AllDatacontext>
      <App />
    </AllDatacontext>
  </BasketLocalstorge>


)
