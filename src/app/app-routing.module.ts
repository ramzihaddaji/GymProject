import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EspaceMusculationComponent } from './espace-musculation/espace-musculation.component';
import { AboutComponent } from './about/about.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';
import { ContactComponent } from './contact/contact.component';
import { CoursAdulteComponent } from './cours-adulte/cours-adulte.component';
import { CoursCollectifComponent } from './cours-collectif/cours-collectif.component';
import { CoursEnfantComponent } from './cours-enfant/cours-enfant.component';
import { EspaceCardioComponent } from './espace-cardio/espace-cardio.component';
import { EspaceFitnessComponent } from './espace-fitness/espace-fitness.component';
import { PlanningComponent } from './planning/planning.component';
import { TarifComponent } from './tarif/tarif.component';
import { AppComponent } from './app.component';
import { OurTeamComponent } from './our-team/our-team.component';

const routes: Routes = [
  {path:"musculation", component:EspaceMusculationComponent},
  {path:"about", component:AboutComponent},
  {path:"bmiclac", component:BmiCalculatorComponent},
  {path:"contact", component:ContactComponent},
  {path:"coursadult", component:CoursAdulteComponent},
  {path:"courcollect", component:CoursCollectifComponent},
  {path:"courenfant", component:CoursEnfantComponent},
  {path:"espacecardio", component:EspaceCardioComponent},
  {path:"espacefit", component:EspaceFitnessComponent},
  {path:"planning", component:PlanningComponent},
  {path:"tarif", component:TarifComponent},
  {path:"equipe", component:OurTeamComponent},
  {path:"*" , component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
