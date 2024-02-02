import {inject, Injectable} from "@angular/core";
import {Actions, createEffect, ofType} from "@ngrx/effects";
import {loadPartnersAction, loadPartnersFailureAction, loadPartnersSuccessAction} from "./partner.actions";
import {catchError, from, map, of, switchMap} from "rxjs";
import {PartnerService} from "../services/partner.service";

@Injectable()
export class PartnerEffects {

  private action$ = inject(Actions)
  private partnerService = inject(PartnerService)

  loadPartners$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadPartnersAction),
      switchMap(() =>
        from(this.partnerService.getPartners()).pipe(
          map(partners => loadPartnersSuccessAction({partners: partners})),
          catchError(error => of(loadPartnersFailureAction({error})))
        ))
    )
  )

}
