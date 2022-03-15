import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { ShowInfoComponent } from './show-info/show-info.component';

const routes: Routes = [
  {
    path:'',
    component:DefaultComponent
  },
  {
    path:'mf',
    component:ShowInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
