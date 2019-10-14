import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from "@ngrx/store";
import { RouterReducerState, routerReducer } from "@ngrx/router-store";

import { environment } from "../../environments/environment";
import { ZipCodeState, zipcodeReducer } from "./zip-codes.reducer";
import {
  CurrentConditionsState,
  CurrentConditionsReducer
} from "./current-conditions.reducer";

export interface State {
  zipcodes: ZipCodeState;
  currentConditions: CurrentConditionsState;
  router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: CurrentConditionsReducer,
  router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectZipcodeState = (state: State) => state.zipcodes;
export const selectZipcodeList = createSelector(
  selectZipcodeState,
  (state: ZipCodeState) => state.zipcodes
);
