import { Component } from "@angular/core";
import { WeatherService } from "../weather.service";
import { LocationService } from "../location.service";
import { Router } from "@angular/router";
import { Store } from "@ngrx/store";
import { State } from "../reducers";

@Component({
  selector: "app-current-conditions",
  templateUrl: "./current-conditions.component.html",
  styleUrls: ["./current-conditions.component.css"]
})
export class CurrentConditionsComponent {
  zipcodes: Array<string>;
  constructor(
    private weatherService: WeatherService,
    private locationService: LocationService,
    private router: Router,
    private store: Store<State>
  ) {
    store
      .select(state => state.zipcodes)
      .subscribe(zips => (this.zipcodes = zips.zipcodes));
  }

  getCurrentConditions() {
    return this.weatherService.getCurrentConditions();
  }

  showForecast(zipcode: string) {
    this.router.navigate(["/forecast", zipcode]);
  }
}
