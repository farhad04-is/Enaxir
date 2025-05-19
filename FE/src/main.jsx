
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import AllDatacontext from './Context/AllDatacontext.jsx'
import BasketLocalstorge from './Context/BasketLocalstorge.jsx'
import WhislistProvider from './Context/WhislistProvider.jsx'

createRoot(document.getElementById('root')).render(
  <WhislistProvider>
    <BasketLocalstorge>
    <AllDatacontext>
      <App />
    </AllDatacontext>
  </BasketLocalstorge>
  </WhislistProvider>


)
