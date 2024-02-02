import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Partner} from "../models/Partner";
import {env} from "../../../../../env/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PartnerService {

  private partnerList: Observable<Partner[]> = new Observable<Partner[]>();

  // readonly getPartnerList = this.partnerList.asReadonly();

  private http = inject(HttpClient);
  getPartners() {

    return this.http.get<Partner[]>(env.apiUrl + '/partner')
    // .subscribe({
    //   next: data => this.partnerList.push(...data),
    //   error: error => console.error('Error fetching partners:', error)
    // });
  }


}
