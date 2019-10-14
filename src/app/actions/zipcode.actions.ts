import { Action } from "@ngrx/store";

export enum ZipcodeActionTypes {
  AddZipcode = "[Zipcode] Add Zipcodes",
  RemoveZipcode = "[Zipcode] Remove Zipcodes"
}

export class AddZipcode implements Action {
  readonly type = ZipcodeActionTypes.AddZipcode;

  constructor(public zipcode: string) {
    console.log("Action fired: ", ZipcodeActionTypes.AddZipcode, this.zipcode);
  }
}

export class RemoveZipcode implements Action {
  readonly type = ZipcodeActionTypes.RemoveZipcode;
  public payload: string;

  constructor(zipcode: string) {
    this.payload = zipcode;
  }
}

export type ZipcodeActions = AddZipcode | RemoveZipcode;
