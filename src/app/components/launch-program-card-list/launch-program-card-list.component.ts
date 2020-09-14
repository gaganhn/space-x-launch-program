import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-launch-program-card-list',
  templateUrl: './launch-program-card-list.component.html',
  styleUrls: ['./launch-program-card-list.component.scss'],
})
export class LaunchProgramCardListComponent implements OnInit {
  constructor(public dataService: DataService) {}

  ngOnInit(): void {}
}
