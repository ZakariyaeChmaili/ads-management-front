import { createReducer, on } from "@ngrx/store";
import { Partner } from "../models/Partner";
import {
  addPartnerAction,
  loadPartnersAction,
  loadPartnersFailureAction,
  loadPartnersSuccessAction
} from "./partner.actions";



export interface PartnerState {
  partners: Partner[];
  error: string | null;
  isLoading: boolean

}
// export const partnerAdapter: EntityAdapter<Partner> = createEntityAdapter<Partner>();


// export interface PartnerState extends EntityState<Partner> {
//   isLoading: boolean;
//   error: string | null;
// }

export const initialState: PartnerState = {
  isLoading: false,
  error: null,
  partners: []
};

export const partnerReducers = createReducer(
  initialState,
  on(addPartnerAction, (state, action) => ({
    ...state,
    partners: [...state.partners, action.partner]
  })),


  //start loading partners
  on(loadPartnersAction, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(loadPartnersSuccessAction, (state, action) => ({
    ...state,
    isLoading: false,
    partners: action.partners,
    error: null
    })),
  on(loadPartnersFailureAction, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
    })),
  //end loading partners


)
