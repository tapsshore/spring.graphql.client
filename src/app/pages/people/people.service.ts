import {Injectable} from "@angular/core";
import {Apollo, gql} from "apollo-angular";

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  constructor(private apollo: Apollo) {
  }

  public getPeople(page: string) {
    const PERSON_QUERY = gql`
      query getAllPeople($page: String!) {
        people(page: $page) {
          count
          next
          previous
          results {
            name
            height
            mass
            gender
            homeworld
          }
        }
      }
    `;
    return this.apollo
      .watchQuery({
        query: PERSON_QUERY, variables: {page: page}
      });
  }

  public searchPeopleByName(name: string) {
    const PERSON_QUERY = gql`
      query searchPeopleByName($name: String!) {
        search(name: $name) {
          count
          next
          previous
          results {
            name
            height
            mass
            gender
            homeworld
          }
        }
      }
    `;
    return this.apollo
      .watchQuery({
        query: PERSON_QUERY, variables: {name: name}
      });
  }
}
