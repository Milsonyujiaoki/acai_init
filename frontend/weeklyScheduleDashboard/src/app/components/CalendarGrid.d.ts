interface Appointment {
    id: number;
    teacherId: number;
    teacherName: string;
    studentName: string;
    day: number;
    startHour: number;
    endHour: number;
    notes: string;
    zoomLink: string;
    color: string;
}
interface CalendarGridProps {
    appointments: Appointment[];
    viewMode: string;
    currentWeek: Date;
    onAppointmentClick: (appointment: Appointment) => void;
}
export declare function CalendarGrid({ appointments, viewMode, currentWeek, onAppointmentClick }: CalendarGridProps): any;
export {};
//# sourceMappingURL=CalendarGrid.d.ts.map