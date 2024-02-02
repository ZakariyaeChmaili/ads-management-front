import {Component, inject, OnInit} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PartnerFormDialogComponent} from "../partner-form-dialog/partner-form-dialog.component";
import {Store} from "@ngrx/store";
import {selectAllPartners, selectPartners, selectPartnersLoading} from "../../store/partner.selectors";
import {loadPartnersAction} from "../../store/partner.actions";


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754,
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199,
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463,
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397,
  },
];


@Component({
  selector: 'app-partner-list',
  templateUrl: './partner-list.component.html',
  styleUrl: './partner-list.component.scss'
})
export class PartnerListComponent implements OnInit{
  countries = COUNTRIES;
  private modalService = inject(NgbModal);
  public store = inject(Store);
  public partnersState$ = this.store.select(selectPartners);

  ngOnInit(): void {
    this.store.dispatch(loadPartnersAction());
  }
  openPartnerDialog() {
    const modalRef =  this.modalService.open(PartnerFormDialogComponent);
    modalRef.componentInstance.name = 'World';

  }

}
