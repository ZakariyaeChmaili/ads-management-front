import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PartnerListComponent } from './components/partner-list/partner-list.component';
import { PartnerComponent } from './partner.component';

const routes: Routes = [
  {path:'',redirectTo:'partnerList',pathMatch:'full'},
  {
    path:'',
    component:PartnerComponent,
    children:[
      {
        path:'partnerList',
        component:PartnerListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartnerRoutingModule { }
