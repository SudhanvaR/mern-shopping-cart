import { StrictMode } from 'react'
import { ChakraProvider } from "@chakra-ui/react"
import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider> 
      <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
)