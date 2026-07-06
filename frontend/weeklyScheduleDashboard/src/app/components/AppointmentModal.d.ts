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
interface Teacher {
    id: number;
    name: string;
    status: string;
    color: string;
}
interface AppointmentModalProps {
    appointment: Appointment;
    teachers: Teacher[];
    isOpen: boolean;
    onClose: () => void;
    onUpdate: (appointment: Appointment) => void;
    onDelete: (id: number) => void;
}
export declare function AppointmentModal({ appointment, teachers, isOpen, onClose, onUpdate, onDelete }: AppointmentModalProps): any;
export {};
//# sourceMappingURL=AppointmentModal.d.ts.map