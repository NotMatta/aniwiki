import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({

  uri: 'https://graphql.anilist.co',

  cache: new InMemoryCache(),

});

console.log(!!client)

const ApolloClientProvider = ({children}:{children:React.ReactNode} ) => {
    return client ? <ApolloProvider client={client}>{children}</ApolloProvider>:
        <div className='text-xl'>Server is offline or you are timed out (bro chill)</div>
}

export default ApolloClientProvider
