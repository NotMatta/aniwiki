import { ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

const client = new ApolloClient({

  uri: 'https://graphql.anilist.co',

  cache: new InMemoryCache(),

});

const ApolloClientProvider = ({children}:{children:React.ReactNode} ) => {
      return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default ApolloClientProvider
