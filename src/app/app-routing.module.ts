import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CircleTimerComponent } from './components/circle-timer/circle-timer.component';

const routes: Routes = [
  {path:'', component: CircleTimerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
