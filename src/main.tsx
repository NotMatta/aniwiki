import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RoutesProvider } from './routes'
import { BrowserRouter } from 'react-router'
import ApolloClientProvider from './components/apollo-provider'
import NavBar from './components/navbar-component'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ApolloClientProvider>
                <div className='w-full h-screen max-w-[1600px] mx-auto flex flex-col '>
                    <NavBar/>
                    <div className='w-full max-h-full h-32 flex-grow relative'>
                        <RoutesProvider/>
                    </div>
                </div>
            </ApolloClientProvider>
        </BrowserRouter>
    </StrictMode>,
)

