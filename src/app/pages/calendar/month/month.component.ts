import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-month',
  standalone: true,
  imports: [NgFor],
  templateUrl: './month.component.html',
  styleUrl: './month.component.scss'
})
export class MonthComponent {
  month:any;
  today:number;
  year:number;
  monthCalendar:any;
  days=['M','T','W','T','F','S','S']
  constructor(private calendarService:CalendarService){
    this.month=new Date().getMonth()
    this.today=new Date().getDay()
    this.year=new Date().getFullYear()
    this.monthCalendar=this.calendarService.getMonthCalendar(this.month,this.year)    
  }
}
