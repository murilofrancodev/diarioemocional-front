import { Component, EventEmitter, Output } from '@angular/core';
import { startOfMonth, endOfMonth, addMonths, subMonths, format } from 'date-fns';
import { pt } from 'date-fns/locale';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  @Output() dateSelected = new EventEmitter<Date>();
  viewDate: Date = new Date();
  days: Date[] = [];
  selectedDate: Date | null = null; 
  
  emotions: { [key: string]: string } = {
    '2024-09-01': '😊',
    '2024-09-02': '😢',
    '2024-09-03': '😨',
  };

  constructor() {
    this.generateCalendar();
  }

  generateCalendar() {
    const start = startOfMonth(this.viewDate);
    const end = endOfMonth(this.viewDate);
    const daysInMonth = [];

    for (let day = start; day <= end; day.setDate(day.getDate() + 1)) {
      daysInMonth.push(new Date(day));
    }

    this.days = daysInMonth;
  }

  selectDate(date: Date) {
    this.selectedDate = date; 
    this.dateSelected.emit(date);
  }

  nextMonth() {
    this.viewDate = addMonths(this.viewDate, 1);
    this.generateCalendar();
  }

  previousMonth() {
    this.viewDate = subMonths(this.viewDate, 1);
    this.generateCalendar();
  }

  get formattedDate(): string {
    const monthYear = format(this.viewDate, 'MMMM yyyy', { locale: pt });
    return monthYear.charAt(0).toUpperCase() + monthYear.slice(1); 
  }

  getEmotionForDate(date: Date): string | null {
    const dateString = date.toISOString().split('T')[0]; 
    return this.emotions[dateString] || null;
  }
}