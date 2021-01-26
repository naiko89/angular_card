import {Component, HostBinding, OnInit} from '@angular/core';
import { ICONP } from '../mock/mock-programicon';
import {trigger, state, style, animate, transition, stagger, keyframes, query} from '@angular/animations';


@Component({
  selector: 'app-listbaseskills',
  templateUrl: './listbaseskills.component.html',
  styleUrls: ['./listbaseskills.component.css'],
  animations: [
    trigger('resizeIcon', [
       state('closed', style({
         height: '50px',
         width: '50px',
         marginTop: '5px'
       })),
       state('open', style({
         height: '35px',
         width: '35px'
         })),
      transition('open => closed', [
        animate('3s', style(
          {
            height: '50px',
            width: '50px',
            marginTop: '5px'
          }))
        ]),
      transition('closed => open', [
        animate('3s', style(
          {
            height: '35px',
            width: '35px'
          }))
      ])
    ]),
    trigger('resizeBoxIcon', [
      state('closed', style({
        marginRight: '50px'
      })),
      state('open', style({
        marginRight: '0px'
      })),
      transition('open => closed', [
        animate('3s', style({
          marginRight: '50px'
        })),
        transition('closed => open', [
          animate('3s', style({
            marginRight: '0px'
          }))
        ])
      ])
    ])
  ]
})
export class ListbaseskillsComponent implements OnInit {
  iconsp = ICONP;
  interval = true;

  constructor() {
  }

  ngOnInit(): void {
   this.move();
  }

  move(): any{
    let count = 0;
    const interval = setInterval(() => {
      if ( count === 1 ) {
        this.interval = false;
      }
      else if (count === 5)
        { count = 0;
          this.interval = true;
        }
      count++;
      }, 2000);
  }
}
