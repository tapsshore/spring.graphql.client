import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PeopleRoutingModule} from './people-routing.module';
import {PeopleListComponent} from './people-list/people-list.component';
import {PeopleComponent} from "./people.component";
import { PeopleDetailsComponent } from './people-details/people-details.component';

@NgModule({
  declarations: [
    PeopleListComponent,
    PeopleComponent,
    PeopleDetailsComponent,
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule
  ]
})
export class PeopleModule { }
