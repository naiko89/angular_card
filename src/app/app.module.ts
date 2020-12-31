import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ShellComponent } from './shell/shell.component';
import { FormsModule } from '@angular/forms';
import { ListbaseskillsComponent } from './listbaseskills/listbaseskills.component';
import { MyExpComponent } from './my-exp/my-exp.component';
import { FooterComponent } from './footer/footer.component';
import { ZoomDirective } from './directive/zoom.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { CitationsComponent } from './citations/citations.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ListbaseskillsComponent,
    MyExpComponent,
    FooterComponent,
    ZoomDirective,
    CarouselComponent,
    CitationsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
