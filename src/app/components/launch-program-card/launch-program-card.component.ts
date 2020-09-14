import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-launch-program-card',
  templateUrl: './launch-program-card.component.html',
  styleUrls: ['./launch-program-card.component.scss'],
})
export class LaunchProgramCardComponent implements OnInit {
  @Input() program: any;
  @Input() programLength: number;

  constructor() {}

  ngOnInit(): void {}
}
