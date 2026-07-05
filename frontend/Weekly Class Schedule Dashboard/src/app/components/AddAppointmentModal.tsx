import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';
import { Plus } from 'lucide-react';

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

export function AddAppointmentModal({ teachers, isOpen, onClose, onAdd }: AddAppointmentModalProps) {
  const [newAppointment, setNewAppointment] = useState({
    teacherId: '',
    studentName: '',
    day: '',
    startHour: '',
    endHour: '',
    notes: '',
    zoomLink: ''
  });

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const hours = Array.from({ length: 14 }, (_, i) => i + 8);

  const formatTime = (hour: number) => {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
    return `${displayHour}:00 ${period}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newAppointment.teacherId || !newAppointment.studentName || !newAppointment.day || 
        !newAppointment.startHour || !newAppointment.endHour) {
      alert('Please fill in all required fields');
      return;
    }

    if (parseInt(newAppointment.startHour) >= parseInt(newAppointment.endHour)) {
      alert('End time must be after start time');
      return;
    }

    const teacher = teachers.find(t => t.id === parseInt(newAppointment.teacherId));
    
    onAdd({
      teacherId: parseInt(newAppointment.teacherId),
      teacherName: teacher?.name || '',
      studentName: newAppointment.studentName,
      day: parseInt(newAppointment.day),
      startHour: parseInt(newAppointment.startHour),
      endHour: parseInt(newAppointment.endHour),
      notes: newAppointment.notes,
      zoomLink: newAppointment.zoomLink
    });

    // Reset form
    setNewAppointment({
      teacherId: '',
      studentName: '',
      day: '',
      startHour: '',
      endHour: '',
      notes: '',
      zoomLink: ''
    });

    onClose();
  };

  const handleCancel = () => {
    setNewAppointment({
      teacherId: '',
      studentName: '',
      day: '',
      startHour: '',
      endHour: '',
      notes: '',
      zoomLink: ''
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add New Appointment</span>
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Teacher *</Label>
            <Select 
              value={newAppointment.teacherId} 
              onValueChange={(value) => setNewAppointment({
                ...newAppointment, 
                teacherId: value
              })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a teacher" />
              </SelectTrigger>
              <SelectContent>
                {teachers.map((teacher) => (
                  <SelectItem key={teacher.id} value={teacher.id.toString()}>
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 ${teacher.color} rounded-full`} />
                      <span>{teacher.name}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label>Student Name *</Label>
            <Input
              value={newAppointment.studentName}
              onChange={(e) => setNewAppointment({
                ...newAppointment,
                studentName: e.target.value
              })}
              placeholder="Enter student name"
              required
            />
          </div>

          <div>
            <Label>Day *</Label>
            <Select 
              value={newAppointment.day} 
              onValueChange={(value) => setNewAppointment({
                ...newAppointment, 
                day: value
              })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a day" />
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

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Start Time *</Label>
              <Select 
                value={newAppointment.startHour} 
                onValueChange={(value) => setNewAppointment({
                  ...newAppointment, 
                  startHour: value
                })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Start" />
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
              <Label>End Time *</Label>
              <Select 
                value={newAppointment.endHour} 
                onValueChange={(value) => setNewAppointment({
                  ...newAppointment, 
                  endHour: value
                })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="End" />
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
            <Label>Zoom Link</Label>
            <Input
              value={newAppointment.zoomLink}
              onChange={(e) => setNewAppointment({
                ...newAppointment,
                zoomLink: e.target.value
              })}
              placeholder="https://zoom.us/j/..."
            />
          </div>

          <div>
            <Label>Notes</Label>
            <Textarea
              value={newAppointment.notes}
              onChange={(e) => setNewAppointment({
                ...newAppointment,
                notes: e.target.value
              })}
              placeholder="Additional notes or subject details..."
              rows={3}
            />
          </div>

          <div className="flex space-x-2 pt-4 border-t">
            <Button type="button" onClick={handleCancel} variant="outline" className="flex-1">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
              Add Appointment
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}