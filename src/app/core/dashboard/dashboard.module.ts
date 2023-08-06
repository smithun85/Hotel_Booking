import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing';
//  carousel-library
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllComponent } from './all/all.component';
import { PersonalDevelopmentComponent } from './personal-development/personal-development.component';
import { ProfessionalDevelopmentComponent } from './professional-development/professional-development.component';
import { FinanceComponent } from './finance/finance.component';
import { WritingComponent } from './writing/writing.component';
import { PopUpComponent } from './pop-up/pop-up.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AllComponent,
    PersonalDevelopmentComponent,
    ProfessionalDevelopmentComponent,
    FinanceComponent,
    WritingComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    SlickCarouselModule,


  ],
})
export class DashboardModule { }