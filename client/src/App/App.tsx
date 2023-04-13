import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { GlobalStyle } from '../styles/resetGlobal'
import { Router } from '../routes'
import { BrowserRouter } from 'react-router-dom'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )  
}


