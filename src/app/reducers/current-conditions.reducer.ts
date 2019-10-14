import { Action } from "@ngrx/store";
import {
  CurrentConditionsActionTypes,
  CurrentConditionsActions
} from "../actions/current-conditions.actions";

export interface CurrentConditionsState {
  currentConditions: Map<string, any>;
}

export const initialState: CurrentConditionsState = {
  currentConditions: new Map()
};

export function CurrentConditionsReducer(
  state = initialState,
  action: CurrentConditionsActions
) {
  switch (action.type) {
    case CurrentConditionsActionTypes.CurrentConditionsLoaded:
      const cc = new Map(state.currentConditions);
      cc.set(action.zipcode, action.conditions);
      const newState = { ...state, currentConditions: cc };
      console.log("NewState: ", newState);
      return newState;

    default:
      return state;
  }
}
