import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS, ApolloModule, gql} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';


const uri = 'http://localhost:7000/swapi-graphql/api/';
const typeDefs = gql`
  type Query {
    people(page : String) : Response
    search(name : String) : Response
  }

  type Response {
    count : String
    next : String
    previous : String
    results: [People]
  }

  type People {
    name : String
    height : String
    mass : String
    gender : String
    homeworld : String
  }`

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
    typeDefs
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
