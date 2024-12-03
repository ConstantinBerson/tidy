import { Component } from '@angular/core';
import { MonthComponent } from './month/month.component';
import { TasksComponent } from './tasks/tasks.component';
import { MonthlyComponent } from './monthly/monthly.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { NgClass, NgIf } from '@angular/common';
import { DailyViewComponent } from './daily-view/daily-view.component';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
      NgClass,
      NgIf,
      MonthComponent,
      TasksComponent,
      MonthlyComponent,
      WeeklyComponent,
      DailyViewComponent
    ],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss'
})
export class CalendarComponent {
  weeklyView:boolean=false;
  view="daily";
  
  constructor(){}

  changeView(view:string){
    this.view=view
  }

}
