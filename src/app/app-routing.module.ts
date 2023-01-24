import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestuarantComponent } from './add-restuarant/add-restuarant.component';
import { DeleteRestuarantComponent } from './delete-restuarant/delete-restuarant.component';
import { RestuarantsListComponent } from './restuarants-list/restuarants-list.component';
import { UpdateRestuarantComponent } from './update-restuarant/update-restuarant.component';
import { ViewRestuarantComponent } from './view-restuarant/view-restuarant.component';

// defining the path for component
const routes: Routes = [
  {
    path:'', component:RestuarantsListComponent
  },
  {
    path:'view-restuarant', component:ViewRestuarantComponent
  },
  {
    path:'add-restuarant', component:AddRestuarantComponent
  },
  {
    path:'update-restuarant', component:UpdateRestuarantComponent
  },
  {
    path:'delete-restuarant', component:DeleteRestuarantComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
