export interface User {
  name: string;
  email?: string;
}

export interface WorkingWeek {
  weekDays: string[];
}

export interface workingHours {
  dayName: string;
  hours: number;
  workDescription: string;
}
