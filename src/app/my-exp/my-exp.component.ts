import { Component, OnInit } from '@angular/core';
import { NgbPaginationConfig, NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { EXPW, EXPI } from '../mock/mock-exp';

@Component({
  selector: 'app-my-exp',
  templateUrl: './my-exp.component.html',
  styleUrls: ['./my-exp.component.css'],
  providers: [NgbPaginationConfig, NgbAccordionConfig]
})
export class MyExpComponent implements OnInit {

  page = 1;
  expsw = EXPW;
  expsi = EXPI;

  constructor(paginConfig: NgbPaginationConfig, accordionConfig: NgbAccordionConfig) {
    paginConfig.size = 'sm';
    paginConfig.boundaryLinks = false;
    paginConfig.directionLinks = false;
  }


  ngOnInit(): void {

  }

}
