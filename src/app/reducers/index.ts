import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { partnerReducers } from '../modules/home/partner/store/partner.reducer';

export interface State {

}

export const reducers: ActionReducerMap<State> = {
  partnerReducer : partnerReducers
};


export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
