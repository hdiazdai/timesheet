

export interface CompleteWeek {
  days: CompleteDay[];
  idWeek: string;
}
export interface CompleteDay {
  totalHs: number;
  date: string;
  activities: Activity[];
  id: string
}
export interface Activity {
  startTime: string;
  finishTime: string;
  text: string;
}
