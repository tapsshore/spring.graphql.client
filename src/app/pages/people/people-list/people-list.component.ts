import {Component, OnInit} from '@angular/core';
import {Person} from "../person.type";
import {PeopleService} from "../people.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
})
export class PeopleListComponent implements OnInit {
  public people: Partial<Person> | any = {};
  public loading = true;
  public selectedPerson: any;
  public pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  public errors: any;


  constructor(private peopleService: PeopleService, private router: Router) {
  }

  ngOnInit(): void {
    this.loadPeople('1')
  }

  public loadPeople(page: string): void {
    this.loading = true;
    this.peopleService.getPeople(page).valueChanges.subscribe((results: any) => {
      this.people = results.data.people.results;
      this.loading = results.loading;
      this.errors = results.errors;
    })
  }

  public setSelectedPerson(selectedPerson: any): void {
    this.router.navigate(['/people', selectedPerson.name])

  }
}
