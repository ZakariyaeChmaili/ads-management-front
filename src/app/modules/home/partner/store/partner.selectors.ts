import {AppState} from "../../../../appState/AppState";
import {createSelector} from "@ngrx/store";
import {PartnerState} from "./partner.reducer";


export const selectPartners = (state: AppState) => state.partnerReducer;

export const selectAllPartners = createSelector(
  selectPartners,
  (state : PartnerState) => state
)

export const selectPartnersLoading = createSelector(
  selectPartners,
  (state : PartnerState) => state.isLoading
)

