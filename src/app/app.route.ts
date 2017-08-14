import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LinesituationComponent } from './feature/linesituation/linesituation.component';
import { RlcComponent } from "app/feature/rlc/rlc.component";
import { RecentComponent } from "app/feature/rlc/recent/recent.component";

export const ROUTES: Routes = [
  { path: '', redirectTo:'home', pathMatch:'full' },
  
  { path: 'home', component: RlcComponent ,
    children:[
      {
        path: '',
        component: RecentComponent,
        outlet: 'recent'
      }
    ]
  },
  { path: 'linesituation', component: LinesituationComponent },
];