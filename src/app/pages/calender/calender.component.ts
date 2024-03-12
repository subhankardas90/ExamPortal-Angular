import { Component } from '@angular/core';
import { CalendarOptions, EventInput  } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  events : any = [
    {title:'Meeting', date: '2024-03-11', color:'#000FF'}, 
    {title:'No Meeting', date: '2024-03-14', color:'#000FF'},
    {title:'Present', date: '2024-03-17', color:'#000FF'}
  ]
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin], 
    events: this.events
  };

  
}