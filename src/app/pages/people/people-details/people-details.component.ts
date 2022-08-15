import {Component, OnInit} from '@angular/core';
import {Person} from "../person.type";
import {ActivatedRoute, Router} from "@angular/router";
import {PeopleService} from "../people.service";

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
})
export class PeopleDetailsComponent implements OnInit {
  public people: Partial<Person> | any = {};
  public loading = true;
  public selectedPerson: any;
  public pages = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  public errors: any;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.errors = null;
      this.peopleService.searchPeopleByName(params.get('name') || '').valueChanges.subscribe((results: any) => {
        this.selectedPerson = results.data.search.results[0];
        this.errors = results.errors;
      })
    });
  }

  backHome() {
    this.router.navigate(['/'])
  }
}
