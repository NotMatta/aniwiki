import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RoutesProvider } from './routes'
import { HashRouter } from 'react-router'
import ApolloClientProvider from './components/apollo-provider'
import NavBar from './components/navbar-component'
import Background from './components/background'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <ApolloClientProvider>
                <div className='w-full h-screen max-w-[1600px] mx-auto flex flex-col text-white'>
                    <Background/>
                    <NavBar/>
                    <div className='w-full max-h-full h-32 flex-grow relative'>
                        <RoutesProvider/>
                    </div>
                </div>
            </ApolloClientProvider>
        </HashRouter>
    </StrictMode>,
)

