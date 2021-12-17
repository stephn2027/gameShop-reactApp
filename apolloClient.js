import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";
  


const client = new ApolloClient({
    uri: 'https://api-ap-northeast-1.graphcms.com/v2/ckx1973mp1kec01za9pts2nzn/master',
    cache: new InMemoryCache()
  });


  export default client;