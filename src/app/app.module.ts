import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { EspaceMusculationComponent } from './espace-musculation/espace-musculation.component';
import { EspaceFitnessComponent } from './espace-fitness/espace-fitness.component';
import { EspaceCardioComponent } from './espace-cardio/espace-cardio.component';
import { CoursCollectifComponent } from './cours-collectif/cours-collectif.component';
import { CoursEnfantComponent } from './cours-enfant/cours-enfant.component';
import { CoursAdulteComponent } from './cours-adulte/cours-adulte.component';
import { TarifComponent } from './tarif/tarif.component';
import { PlanningComponent } from './planning/planning.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    EspaceMusculationComponent,
    EspaceFitnessComponent,
    EspaceCardioComponent,
    CoursCollectifComponent,
    CoursEnfantComponent,
    CoursAdulteComponent,
    TarifComponent,
    PlanningComponent,
    BmiCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
