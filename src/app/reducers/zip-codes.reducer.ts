import { Action } from "@ngrx/store";
import { ZipcodeActionTypes, ZipcodeActions } from "../actions/zipcode.actions";

export interface ZipCodeState {
  zipcodes: Array<string>;
}

export const initialState: ZipCodeState = {
  zipcodes: []
};

export function zipcodeReducer(
  state = initialState,
  action: ZipcodeActions
): ZipCodeState {
  switch (action.type) {
    case ZipcodeActionTypes.AddZipcode:
      const newState = {
        ...state,
        zipcodes: [...state.zipcodes, action.zipcode]
      };
      console.log("newstate:", newState);
      return newState;

    case ZipcodeActionTypes.RemoveZipcode:
      return {
        ...state,
        zipcodes: state.zipcodes.filter(zipcode => zipcode !== action.payload)
      };
    default:
      return state;
  }
}
