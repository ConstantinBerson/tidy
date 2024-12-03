import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-daily-view',
  standalone: true,
  imports: [NgClass],
  templateUrl: './daily-view.component.html',
  styleUrl: './daily-view.component.scss'
})
export class DailyViewComponent {
  w=[
    2,3,4,5,6,7,8
  ]
  
  days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
  week:any[]=[];
  constructor(){
    for (let i = 0; i < this.w.length; i++) {
      this.week.push(this.w[i].toString().padStart(2,"0"));      
    }
  }
}
