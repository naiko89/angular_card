import {Component, NgModule, OnInit} from '@angular/core';
import { BaseLinks } from '../interface/baseLinks';
import { LINKS } from '../mock/mock-links';



@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  links = LINKS;


  constructor() { }

  ngOnInit(): void {
  }

}
