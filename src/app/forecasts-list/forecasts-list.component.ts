import { Component } from "@angular/core";
import { WeatherService } from "../weather.service";
import { ActivatedRoute } from "@angular/router";

import { Store } from "@ngrx/store";
import { selectForecast, State } from "../reducers";

@Component({
  selector: "app-forecasts-list",
  templateUrl: "./forecasts-list.component.html",
  styleUrls: ["./forecasts-list.component.css"]
})
export class ForecastsListComponent {
  forecast: any;

  constructor(
    private store: Store<State>,
    private weatherService: WeatherService
  ) {
    store.select(selectForecast).subscribe(fcast => (this.forecast = fcast));
    // route.params.subscribe(params => {
    //   this.zipcode = params['zipcode'];
    //   weatherService.getForecast(this.zipcode)
    //     .subscribe(data => this.forecast = data);
    // });
  }
}
