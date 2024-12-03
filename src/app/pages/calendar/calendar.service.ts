import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  days=['Mon','Tue','Wed','Thu','Fri','Sat','Sun']

  constructor() { }

  getMonthCalendar(month:number,year:number){
    let date=new Date(year,month,1);        
    let m:day[][]=[];
    let w:day[]=[];
    let disabled:boolean=true;

    let x=this.days.indexOf(date.toDateString().split(" ")[0]);
    let day=x==0?date.getDate():1-x;  

    for (let i = 0; i < 42; i++) {
      date=new Date(year,month,day+i)       
      if (date.getMonth()==month&&this.days.indexOf(date.toDateString().split(" ")[0])<5) {
        disabled=false
      }else{
        disabled=true
      }
      w.push({
        disabled,
        num:date.getDate().toString().padStart(2,"0")
      })
      if ((i+1)%7==0) {
        m.push(w)
        w=[]
      }  
    }
    return m;
  }

  getWeekCalendar(){}
}

export interface day{
  num:string,
  disabled:boolean
}
