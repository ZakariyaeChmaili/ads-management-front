import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PartnerRoutingModule } from './partner-routing.module';
import { PartnerComponent } from './partner.component';
import { PartnerListComponent } from './components/partner-list/partner-list.component';
import { PartnerFormDialogComponent } from './components/partner-form-dialog/partner-form-dialog.component';


@NgModule({
  declarations: [
    PartnerComponent,
    PartnerListComponent,
    PartnerFormDialogComponent
  ],
  imports: [
    CommonModule,
    PartnerRoutingModule,

  ]
})
export class PartnerModule { }
