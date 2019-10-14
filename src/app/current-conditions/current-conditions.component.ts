import { Component } from "@angular/core";
import { WeatherService } from "../weather.service";
import { LocationService } from "../location.service";
import { Router } from "@angular/router";
import { Store, select } from "@ngrx/store";
import { State, selectZipcodeList } from "../reducers";
import { RemoveZipcode } from "../actions/zipcode.actions";

@Component({
  selector: "app-current-conditions",
  templateUrl: "./current-conditions.component.html",
  styleUrls: ["./current-conditions.component.css"]
})
export class CurrentConditionsComponent {
  zipcodes: Array<string>;
  currentConditions: Map<string, any>;

  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService,
    private router: Router,
    private store: Store<State>
  ) {
    store.select(selectZipcodeList).subscribe(zips => (this.zipcodes = zips));

    store
      .select(state => state.currentConditions)
      .subscribe(
        conditions => (this.currentConditions = conditions.currentConditions)
      );
  }

  getConditions(zip: string) {
    return this.currentConditions.get(zip);
  }

  showForecast(zipcode: string) {
    this.router.navigate(["/forecast", zipcode]);
  }

  removeZip(zip) {
    this.store.dispatch(new RemoveZipcode(zip));
  }
  getIcon(id: string) {
    return this.weatherService.getWeatherIcon(id);
  }
}
