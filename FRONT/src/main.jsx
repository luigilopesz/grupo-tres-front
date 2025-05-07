// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-vlbhbshl7b1pxe8e.us.auth0.com"
    clientId="eo8WNkaTwrcGujuCMSkRZG3yMYuQvXTy"
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "https://dev-vlbhbshl7b1pxe8e.us.auth0.com/api/v2/"
    }}
  >
    <App />
  </Auth0Provider>
)
