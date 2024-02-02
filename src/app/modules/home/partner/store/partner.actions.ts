import { createAction, props } from "@ngrx/store";
import { Partner } from "../models/Partner";




export const loadPartnersAction = createAction(
  '[Partner] Load Partners')

export const loadPartnersSuccessAction = createAction(
  '[Partner] Load Partners Success',
  props<{ partners: Partner[] }>()
)

export const loadPartnersFailureAction = createAction(
  '[Partner] Load Partners Failure',
  props<{ error: string }>()
)




export const addPartnerAction = createAction(
  '[Partner] Add Partner',
  props<{ partner: Partner }>()
)

export const deletePartnerAction = createAction(
  '[Partner] Delete Partner',
  props<{ partnerId: number }>()
)

