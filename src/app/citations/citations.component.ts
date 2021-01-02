import { Component, OnInit } from '@angular/core';
import { WORDS } from '../mock/words'

@Component({
  selector: 'app-citations',
  templateUrl: './citations.component.html',
  styleUrls: ['./citations.component.css']
})
export class CitationsComponent implements OnInit {

  citazioni = WORDS;
  constructor() { }


  ngOnInit(): void {}

}
