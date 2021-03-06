
import { Controller } from "stimulus";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

import Rails from '@rails/ujs';


export default class extends Controller {
  static targets = ['calendar', "modal", "start_time", "end_time"]

  connect() {
    let that = this;
    let calendar = new Calendar(this.calendarTarget, {
      events: '/events.json', 
      editable: true, 
      navLinks: true, 
      headerToolbar: {center: 'dayGridMonth, timeGridWeek, timeGridDay' }, 
      plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin], 
      navLinkDayClick: function(date, jsEvent) {
        that.modalTarget.style.display = "block";
        that.start_timeTarget.value = date
        that.end_timeTarget.value = date

      }
    })
    calendar.render()
  }
}