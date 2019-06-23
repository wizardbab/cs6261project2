import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from './tournament/hello/hello.component';
import { RegistrationComponent } from './tournament/registration/registration.component';
import { BracketsComponent } from './tournament/brackets/brackets.component';

const routes: Routes = [{ path: 'tournament/registration', component: RegistrationComponent },
                        { path: 'tournament/brackets', component: BracketsComponent },
                        { path: '**', component: HelloComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
