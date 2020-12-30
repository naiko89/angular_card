import { Component, OnInit } from '@angular/core';
import { ICONP } from '../mock/mock-programicon';

@Component({
  selector: 'app-listbaseskills',
  templateUrl: './listbaseskills.component.html',
  styleUrls: ['./listbaseskills.component.css']
})
export class ListbaseskillsComponent implements OnInit {

  iconsp = ICONP;
  constructor() { }

  ngOnInit(): void {
  }

}
