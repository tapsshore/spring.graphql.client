import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PeopleComponent} from "./people.component";
import {PeopleListComponent} from "./people-list/people-list.component";
import {PeopleDetailsComponent} from "./people-details/people-details.component";

const routes: Routes = [{
  path: '',
  component: PeopleComponent,
  children: [
    {
      path: '',
      component: PeopleListComponent,
    },
    {
      path: 'people/:name',
      component: PeopleDetailsComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule {
}
