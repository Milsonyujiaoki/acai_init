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
interface AppointmentCardProps {
    appointment: Appointment;
    onClick: () => void;
}
export declare function AppointmentCard({ appointment, onClick }: AppointmentCardProps): any;
export {};
//# sourceMappingURL=AppointmentCard.d.ts.map