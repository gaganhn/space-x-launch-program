import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  programs: BehaviorSubject<any[]> = new BehaviorSubject([]);
  loader: BehaviorSubject<boolean> = new BehaviorSubject(false);
  limit: any = 100;

  constructor(private http: HttpClient) {}

  getPrograms(
    launchYear: number,
    launchSuccess: boolean,
    landSuccess: boolean
  ): void {
    this.loader.next(true);
    let apiURL = environment.baseURL + `?limit=${this.limit}`;

    apiURL =
      apiURL +
      (launchSuccess === true || launchSuccess === false
        ? `&launch_success=${launchSuccess}`
        : '');

    apiURL =
      apiURL +
      (landSuccess === true || landSuccess === false
        ? `&land_success=${landSuccess}`
        : '');

    apiURL = apiURL + (launchYear ? `&launch_year=${launchYear}` : '');

    this.http.get(apiURL).subscribe(
      (res: any) => {
        setTimeout(() => {
          this.programs.next(res);
          this.loader.next(false);
        }, 10);
      },
      () => this.loader.next(false)
    );
  }
}
