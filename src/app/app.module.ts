import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ShellComponent } from './shell/shell.component';
import { ListbaseskillsComponent } from './listbaseskills/listbaseskills.component';
import { MyExpComponent } from './my-exp/my-exp.component';
import { FooterComponent } from './footer/footer.component';
import { ZoomDirective } from './directive/zoom.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { CitationsComponent } from './citations/citations.component';
import { allIcons} from 'ng-bootstrap-icons/icons';
import { ValueboxComponent } from './valuebox/valuebox.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    BootstrapIconsModule.pick(allIcons)
  ],
  exports: [BootstrapIconsModule],
  declarations: [
    AppComponent,
    ShellComponent,
    ListbaseskillsComponent,
    MyExpComponent,
    FooterComponent,
    ZoomDirective,
    CarouselComponent,
    CitationsComponent,
    ValueboxComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
