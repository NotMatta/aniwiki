import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RoutesProvider } from './routes'
import { BrowserRouter } from 'react-router'
import ApolloClientProvider from './components/apollo-provider'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ApolloClientProvider>
                <RoutesProvider/>
            </ApolloClientProvider>
        </BrowserRouter>
    </StrictMode>,
)

