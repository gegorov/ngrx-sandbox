import {
  ForecastActions,
  ForecastActionTypes
} from "../actions/forecast.actions";

export interface ForecastState {
  forecast: any;
}

export const initialState: ForecastState = {
  forecast: {}
};

export function forecastReducer(state = initialState, action: ForecastActions) {
  switch (action.type) {
    case ForecastActionTypes.ForecastLoaded:
      return {
        ...state,
        forecast: action.forecast
      };

    default:
      return state;
  }
}
