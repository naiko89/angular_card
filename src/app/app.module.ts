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
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons} from 'ng-bootstrap-icons/icons';
import { ValueboxComponent } from './valuebox/valuebox.component';

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
    ValueboxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
