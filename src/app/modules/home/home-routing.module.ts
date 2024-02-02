import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', redirectTo: 'partner', pathMatch: 'full' },
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'partner',
        loadChildren: () => import('./partner/partner.module').then(m => m.PartnerModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
