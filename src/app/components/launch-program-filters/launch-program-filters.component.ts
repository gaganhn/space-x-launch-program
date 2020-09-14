import { Component, OnInit, OnDestroy } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-launch-program-filters',
  templateUrl: './launch-program-filters.component.html',
  styleUrls: ['./launch-program-filters.component.scss'],
})
export class LaunchProgramFiltersComponent implements OnInit, OnDestroy {
  launchYears: number[] = [];
  selectedlaunchYear: number = null;
  launchSuccess: boolean = null;
  landSuccess: boolean = null;
  retrieveQueryParams$: Subscription;

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.retrieveQueryParams();
    this.setLaunchYears();
    this.getPrograms();
  }

  ngOnInit(): void {}

  retrieveQueryParams(): void {
    this.retrieveQueryParams$ = this.route.queryParams.subscribe(
      (params: any) => {
        let isChanged = false;

        const launchSuccess = params.hasOwnProperty('launch_success')
          ? params.launch_success === 'true'
            ? true
            : false
          : null;

        const landSuccess = params.hasOwnProperty('land_success')
          ? params.land_success === 'true'
            ? true
            : false
          : null;

        const launchYear = params.hasOwnProperty('launch_year')
          ? parseInt(params.launch_year, 10)
          : null;

        if (launchSuccess !== this.launchSuccess) {
          this.launchSuccess = launchSuccess;
          isChanged = true;
        }

        if (landSuccess !== this.landSuccess) {
          this.landSuccess = landSuccess;
          isChanged = true;
        }

        if (launchYear !== this.selectedlaunchYear) {
          this.selectedlaunchYear = launchYear;
          isChanged = true;
        }

        if (isChanged) {
          this.getPrograms();
        }
      }
    );
  }

  setLaunchYears(): void {
    const launchYearStart = 2006;
    const launchYearEnd: number = new Date().getFullYear();
    for (let i: number = launchYearStart; i <= launchYearEnd; i++) {
      this.launchYears.push(i);
    }
  }

  getPrograms(): void {
    this.dataService.getPrograms(
      this.selectedlaunchYear,
      this.launchSuccess,
      this.landSuccess
    );
    this.routerReplace();
  }

  routerReplace(): void {
    const queryParamsCalculated = {};

    if (this.launchSuccess !== undefined || this.launchSuccess !== null) {
      queryParamsCalculated['launch_success'] = this.launchSuccess;
    }

    if (this.landSuccess !== undefined || this.landSuccess !== null) {
      queryParamsCalculated['land_success'] = this.landSuccess;
    }

    if (
      this.selectedlaunchYear !== undefined ||
      this.selectedlaunchYear !== null
    ) {
      queryParamsCalculated['launch_year'] = this.selectedlaunchYear;
    }

    if (Object.keys(queryParamsCalculated).length > 0) {
      setTimeout(() => {
        this.router.navigate(['landing-programs'], {
          replaceUrl: true,
          queryParams: queryParamsCalculated,
        });
      });
    }
  }

  filterChangeHandler(
    type: 'year' | 'launch' | 'land',
    changedvalue: any
  ): void {
    switch (type) {
      case 'year':
        if (this.selectedlaunchYear === changedvalue) {
          return;
        }
        this.selectedlaunchYear = changedvalue;
        this.getPrograms();
        break;

      case 'launch':
        if (this.launchSuccess === changedvalue) {
          return;
        }
        this.launchSuccess = changedvalue;
        this.getPrograms();
        break;

      case 'land':
        if (this.landSuccess === changedvalue) {
          return;
        }
        this.landSuccess = changedvalue;
        this.getPrograms();
        break;

      default:
        break;
    }
  }

  filterReset(): void {
    this.selectedlaunchYear = null;
    this.launchSuccess = null;
    this.landSuccess = null;
    this.getPrograms();
  }

  ngOnDestroy(): void {
    this.retrieveQueryParams$.unsubscribe();
  }
}
