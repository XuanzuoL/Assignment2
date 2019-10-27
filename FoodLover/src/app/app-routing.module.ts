import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from './places/places.component';
import { detailComponent } from './detail/detail.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {path:'places/:value', component: PlacesComponent},
  {path:'detail', component: detailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
