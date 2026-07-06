interface Teacher {
    id: number;
    name: string;
    status: string;
    color: string;
}
interface AddAppointmentModalProps {
    teachers: Teacher[];
    isOpen: boolean;
    onClose: () => void;
    onAdd: (appointment: any) => void;
}
export declare function AddAppointmentModal({ teachers, isOpen, onClose, onAdd }: AddAppointmentModalProps): any;
export {};
//# sourceMappingURL=AddAppointmentModal.d.ts.map