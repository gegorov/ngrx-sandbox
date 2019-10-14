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
import { ForecastState, forecastReducer } from "./forecast.reducer";
import {
  CurrentConditionsState,
  CurrentConditionsReducer
} from "./current-conditions.reducer";

export interface State {
  zipcodes: ZipCodeState;
  currentConditions: CurrentConditionsState;
  router: RouterReducerState;
  forecast: ForecastState;
}

export const reducers: ActionReducerMap<State> = {
  zipcodes: zipcodeReducer,
  currentConditions: CurrentConditionsReducer,
  router: routerReducer,
  forecast: forecastReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];

export const selectZipcodeState = (state: State) => state.zipcodes;
export const selectZipcodeList = createSelector(
  selectZipcodeState,
  (state: ZipCodeState) => state.zipcodes
);

export const selectCurrentConditionsState = (state: State) =>
  state.currentConditions;

export const selectCurrentConditionsList = createSelector(
  selectCurrentConditionsState,
  (state: CurrentConditionsState) => state.currentConditions
);

export const selectForecastState = (state: State) => state.forecast;
export const selectForecast = createSelector(
  selectForecastState,
  (state: ForecastState) => state.forecast
);
