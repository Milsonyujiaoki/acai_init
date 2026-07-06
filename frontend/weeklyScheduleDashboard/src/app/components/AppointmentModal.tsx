import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Calendar, Clock, User, Link, Trash2, Edit } from 'lucide-react';

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

export function AppointmentModal({ 
  appointment, 
  teachers, 
  isOpen, 
  onClose, 
  onUpdate, 
  onDelete 
}: AppointmentModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAppointment, setEditedAppointment] = useState(appointment);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hours = Array.from({ length: 14 }, (_, i) => i + 8);

  const formatTime = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  const handleSave = () => {
    const teacher = teachers.find(t => t.id === editedAppointment.teacherId);
    const updatedAppointment = {
      ...editedAppointment,
      teacherName: teacher?.name || editedAppointment.teacherName,
      color: teacher?.color || editedAppointment.color
    };
    onUpdate(updatedAppointment);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditedAppointment(appointment);
    setIsEditing(false);
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      onDelete(appointment.id);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Calendar className="h-5 w-5" />
            <span>Appointment Details</span>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {!isEditing ? (
            // View mode
            <>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 ${appointment.color} rounded-full`} />
                  <div>
                    <p className="text-sm text-gray-600">Teacher</p>
                    <p className="text-gray-900">{appointment.teacherName}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <User className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Student</p>
                    <p className="text-gray-900">{appointment.studentName}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-4 w-4 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">Time</p>
                    <p className="text-gray-900">
                      {days[appointment.day]}, {formatTime(appointment.startHour)} - {formatTime(appointment.endHour)}
                    </p>
                  </div>
                </div>

                {appointment.zoomLink && (
                  <div className="flex items-center space-x-3">
                    <Link className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-600">Zoom Link</p>
                      <a 
                        href={appointment.zoomLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-sm underline"
                      >
                        Join Meeting
                      </a>
                    </div>
                  </div>
                )}

                {appointment.notes && (
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Notes</p>
                    <p className="text-gray-900 text-sm bg-gray-50 p-2 rounded">
                      {appointment.notes}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex space-x-2 pt-4 border-t">
                <Button
                  onClick={() => setIsEditing(true)}
                  variant="outline"
                  className="flex-1"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  Edit
                </Button>
                <Button
                  onClick={handleDelete}
                  variant="destructive"
                  className="flex-1"
                >
                  <Trash2 className="h-4 w-4 mr-2" />
                  Delete
                </Button>
              </div>
            </>
          ) : (
            // Edit mode
            <>
              <div className="space-y-4">
                <div>
                  <Label>Teacher</Label>
                  <Select 
                    value={editedAppointment.teacherId.toString()} 
                    onValueChange={(value) => setEditedAppointment({
                      ...editedAppointment, 
                      teacherId: parseInt(value)
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {teachers.map((teacher) => (
                        <SelectItem key={teacher.id} value={teacher.id.toString()}>
                          {teacher.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Student Name</Label>
                  <Input
                    value={editedAppointment.studentName}
                    onChange={(e) => setEditedAppointment({
                      ...editedAppointment,
                      studentName: e.target.value
                    })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Day</Label>
                    <Select 
                      value={editedAppointment.day.toString()} 
                      onValueChange={(value) => setEditedAppointment({
                        ...editedAppointment, 
                        day: parseInt(value)
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {days.map((day, index) => (
                          <SelectItem key={index} value={index.toString()}>
                            {day}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Start Time</Label>
                    <Select 
                      value={editedAppointment.startHour.toString()} 
                      onValueChange={(value) => setEditedAppointment({
                        ...editedAppointment, 
                        startHour: parseInt(value)
                      })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {hours.map((hour) => (
                          <SelectItem key={hour} value={hour.toString()}>
                            {formatTime(hour)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label>End Time</Label>
                  <Select 
                    value={editedAppointment.endHour.toString()} 
                    onValueChange={(value) => setEditedAppointment({
                      ...editedAppointment, 
                      endHour: parseInt(value)
                    })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {hours.map((hour) => (
                        <SelectItem key={hour} value={hour.toString()}>
                          {formatTime(hour)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label>Zoom Link</Label>
                  <Input
                    value={editedAppointment.zoomLink}
                    onChange={(e) => setEditedAppointment({
                      ...editedAppointment,
                      zoomLink: e.target.value
                    })}
                    placeholder="https://zoom.us/j/..."
                  />
                </div>

                <div>
                  <Label>Notes</Label>
                  <Textarea
                    value={editedAppointment.notes}
                    onChange={(e) => setEditedAppointment({
                      ...editedAppointment,
                      notes: e.target.value
                    })}
                    placeholder="Additional notes..."
                    rows={3}
                  />
                </div>
              </div>

              <div className="flex space-x-2 pt-4 border-t">
                <Button onClick={handleCancel} variant="outline" className="flex-1">
                  Cancel
                </Button>
                <Button onClick={handleSave} className="flex-1">
                  Save Changes
                </Button>
              </div>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}